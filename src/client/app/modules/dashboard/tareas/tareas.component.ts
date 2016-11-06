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
	private categorias:any[];
	private unidades:any[];
	private dataEdit:any;
	private dataIn:any;
	private activityIn:Actividad;
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
		this.rest.get('/categoria').subscribe(
		    data => {
		    	this.categorias = data;
		    },
		    err => console.error(err)
		);
		this.rest.get('/unidad/getbyuser').subscribe(
		    data => {
		    	this.unidades = data;
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
	addCategory(value:number){
		for(let i=0;i<this.categorias.length;i++){
			if(this.categorias[i].ID_CATEGORIA == value){
				if(this.dataIn.CATEGORIA.indexOf(this.categorias[i]) == -1){
					this.dataIn.CATEGORIA.push(this.categorias[i]);	
				}
				break;
			}
		}
	}
	resetForm() {
		this.dataIn = {
			NOMBRE: '',
			DESCRIPCION: '',
			CATEGORIA: [],
			UNIDAD: '',
			ACTIVIDADES: []
		};
	}
	goActivity() {
		this.activityIn = new Actividad();
		this.view = 'create_activity';
	}
}
class Task {
	nombre:string;
	lugar:number;
	descripcion:string;
}
class Actividad {
	nombre:string;
	descripcion:string;
	task:Task[];
	constructor(){
		this.nombre = '';
		this.descripcion = '';
		this.task = [];
	}
}