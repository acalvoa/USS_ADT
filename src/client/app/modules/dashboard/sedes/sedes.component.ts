import { Component } from '@angular/core';
import { RestService } from '../../../services/index';

@Component({
	moduleId: module.id,
    selector: 'sedes-module',
    templateUrl: 'sedes.component.html',
    styleUrls: ['sedes.component.css'],

})

export class SedesComponent {
	private rest:RestService;
	private view:string;
	private sedes:any[];
	private dataEdit:any;
	private dataIn:any;
	//CONSTRUCTOR
	constructor(rest:RestService) {
		this.view = 'visor';
		this.rest = rest;
		this.fetch();
		this.resetForm();
	}
	fetch() {
		this.rest.get('/sedes').subscribe(
		    data => {
		    	this.sedes = data.sedes;
		    },
		    err => console.error(err)
		);
	}
	save(event:any) {
		event.preventDefault();
		if(this.view === 'form') {
			this.rest.post(this.dataIn, '/sedes').subscribe(
			    data => {
			    	this.sedes.push(data);
			    	this.view = 'visor';
			    	this.resetForm();
			    },
			    err => console.error(err)
			);
		}
		if(this.view === 'edit') {
			this.rest.put(this.dataEdit.ID_SEDE, '/sedes', this.dataIn).subscribe(
			    data => {
			    	this.sedes[this.sedes.indexOf(this.dataEdit)] = data;
			    	this.view = 'visor';
			    	this.resetForm();
			    },
			    err => console.error(err)
			);
		}
	}
	goEdit(obj:any) {
		this.dataEdit = obj;
		this.dataIn.NOMBRE_SEDE = obj.NOMBRE_SEDE;
		this.dataIn.DIRECCION = obj.DIRECCION;
		this.view = 'edit';
	}
	delete(obj:any) {
		this.rest.delete(obj.ID_SEDE, '/sedes').subscribe(
		    data => {
		    	this.sedes.splice(this.sedes.indexOf(obj),1);
		    },
		    err => console.error(err)
		);
	}
	resetForm() {
		this.dataIn = {
			NOMBRE_SEDE: '',
			DIRECCION: ''
		};
	}
}
