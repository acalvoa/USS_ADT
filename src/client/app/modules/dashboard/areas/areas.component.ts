import { Component } from '@angular/core';
import { RestService } from '../../../services/index';

@Component({
	moduleId: module.id,
    selector: 'areas-module',
    templateUrl: 'areas.component.html',
    styleUrls: ['areas.component.css'],

})

export class AreasComponent {
	private rest:RestService;
	private view:string;
	private areas:any[];
	private users:any[];
	private dataEdit:any;
	private dataIn:any;
	private sedes:any[];
	//CONSTRUCTOR
	constructor(rest:RestService) {
		this.rest = rest;
		this.view = 'visor';
		this.fetch();
		this.resetForm();
		this.fetchSedes();
	}
	//TRAE DATA
	fetch() {
		this.rest.get('/area').subscribe(
			data => {
				this.areas = data;
			},
			err => console.error(err)
		);
	}

	fetchSedes() {
		this.rest.get('/sedes').subscribe(
			data => {
				if(data.response === 200) {
					this.sedes = data.sedes;
				}
			},
			err => console.error(err)
		);
	}

	save(event:any) {
		event.preventDefault();
		if(this.view === 'form') {
			this.rest.post(this.dataIn,'/area').subscribe(
				data => {
					data.SEDE = this.searchSede(data.SEDE);
					this.areas.push(data);
					this.view = 'visor';
					this.resetForm();
				},
				err => console.error(err)
			);
		}
		if(this.view === 'edit') {
			this.rest.put(this.dataEdit.ID_AREA,'/area',this.dataIn).subscribe(
				data => {
					this.areas[this.areas.indexOf(this.dataEdit)] = data;
					this.view = 'visor';
					this.resetForm();
				},
				err => console.error(err)
			);
		}
	}
	searchSede(value:number) {
		for(let i=0; i<this.sedes.length; i++) {
		 	if(this.sedes[i].ID_SEDE === value) return this.sedes[i];
		}
		return null;
	}
	goEdit(obj:any) {
		this.rest.get('/users?AREA='+obj.ID_AREA).subscribe(
			data => {
				this.users = data;
				this.dataEdit = obj;
				this.dataIn.NOMBRE_AREA = obj.NOMBRE_AREA;
				this.dataIn.SEDE = obj.SEDE.ID_SEDE;
				this.dataIn.RESPONSABLE = obj.RESPONSABLE.ID_USER !== 1 ? obj.RESPONSABLE.ID_USER : '';
				this.view = 'edit';
				this.resetForm();
			},
			err => console.error(err)
		);
	}

	delete(obj:any) {

		this.rest.delete(obj.ID_AREA, '/area').subscribe(
			data => {
				this.areas.splice(this.areas.indexOf(obj),1);
			},
			err => console.error(err)
		);

	}
	resetForm() {
		this.dataIn = {
			NOMBRE_AREA: '',
			SEDE: '',
			RESPONSABLE: 1
		};
	}
}
