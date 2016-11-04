import { Component } from '@angular/core';
import { RestService } from '../../../services/index';

@Component({
	moduleId: module.id,
    selector: 'tareas-module',
    templateUrl: 'tareas.component.html',
    styleUrls: ['tareas.component.css'],

})

export class TareasComponent {
	private rest:RestService;
	private view:string;
	private tareas:any[];
	private sedes:any[];
	private dataEdit:any;
	private dataIn:any;
	//CONSTRUCTOR
	constructor(rest:RestService) {
		this.view = 'visor';
		this.rest = rest;
		this.fetch();
		this.fetchSedes();
		this.resetForm();
	}
	fetch() {
		this.rest.get('/tareas').subscribe(
		    data => {
		    	this.tareas = data;
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
			this.rest.post(this.dataIn, '/lugar').subscribe(
			    data => {
			    	data.SEDE = this.searchSede(data.SEDE);
			    	this.tareas.push(data);
			    	this.view = 'visor';
			    	this.resetForm();
			    },
			    err => console.error(err)
			);
		}
		if(this.view === 'edit') {
			this.rest.put(this.dataEdit.ID_LUGAR, '/lugar', this.dataIn).subscribe(
			    data => {
			    	this.tareas[this.tareas.indexOf(this.dataEdit)] = data;
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
		this.dataEdit = obj;
		this.dataIn.NOMBRE_LUGAR = obj.NOMBRE_LUGAR;
		this.dataIn.SEDE = obj.SEDE.ID_SEDE;
		this.view = 'edit';
	}
	delete(obj:any) {
		this.rest.delete(obj.ID_LUGAR, '/lugar').subscribe(
		    data => {
		    	this.tareas.splice(this.tareas.indexOf(obj),1);
		    },
		    err => console.error(err)
		);
	}
	resetForm() {
		this.dataIn = {
			NOMBRE_LUGAR: '',
			SEDE: ''
		};
	}
}
