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
	private lastView:string;
	private view:string;
	private tareas:any[];
	private sedes:any[];
	private categorias:any[];
	private lugares:any[];
	private unidades:any[];
	private dataEdit:any;
	private dataIn:any;
	private activityIn:Actividad;
	private activityEdit:Actividad;
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
		    	console.log(data);
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
			var save = JSON.parse(JSON.stringify(this.dataIn));
			this.rest.post(save, '/tareas/createAdmin').subscribe(
			    data => {
			    	for(let i=0;i<this.unidades.length;i++){
			    		if(this.unidades[i].ID_UNIDAD == this.dataIn.UNIDAD){
			    			data.UNIDAD = this.unidades[i];
			    			break;
			    		}
			    	}
			    	data.CATEGORIA = this.dataIn.CATEGORIA;
			    	this.tareas.push(data);
			    	this.view = 'visor';
			    },
			    err => console.error(err)
			);
		}
		if(this.view === 'edit') {
			var save = JSON.parse(JSON.stringify(this.dataIn));
			this.rest.put(this.dataEdit.ID_TAREA, '/tareas/editAdmin', save).subscribe(
			    data => {
			    	for(let i=0;i<this.unidades.length;i++){
			    		if(this.unidades[i].ID_UNIDAD == this.dataIn.UNIDAD){
			    			this.dataIn.UNIDAD = this.unidades[i];
			    			break;
			    		}
			    	}
			    	this.tareas[this.tareas.indexOf(this.dataEdit)] = this.dataIn;
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
		this.resetForm();
		this.dataEdit = obj;
		this.dataIn = JSON.parse(JSON.stringify(obj));
		this.dataIn.UNIDAD = this.dataIn.UNIDAD.ID_UNIDAD;
		delete this.dataIn.ID_TAREA;
		this.view = 'edit';
	}
	delete(obj:any) {
		this.rest.delete(obj.ID_TAREA, '/tareas').subscribe(
		    data => {
		    	this.tareas.splice(this.tareas.indexOf(obj),1);
		    },
		    err => console.error(err)
		);
	}
	addCategory(value:any) {
		for(let i=0;i<this.categorias.length;i++){
			if(this.categorias[i].ID_CATEGORIA == value.value){
				if(this.dataIn.CATEGORIA.indexOf(this.categorias[i]) === -1){
					this.dataIn.CATEGORIA.push(this.categorias[i]);	
				}
				break;
			}
		}
		value.value = '';
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
		this.rest.get('/lugar/getbyuser').subscribe(
		    data => {
		    	this.lugares = data;
		    	this.activityIn = new Actividad();
		    	this.lastView = this.view;
		    	this.view = 'create_activity';
		    },
		    err => console.error(err)
		);
	}
	goEditAct(act:Actividad) {
		this.rest.get('/lugar/getbyuser').subscribe(
		    data => {
		    	this.lugares = data;
		    	this.activityEdit = act;
		    	this.activityIn = new Actividad();
		    	this.activityIn.NOMBRE = act.NOMBRE;
		    	this.activityIn.ID_ACTIVIDAD = act.ID_ACTIVIDAD;
		    	this.activityIn.DESCRIPCION = act.DESCRIPCION;
		    	this.activityIn.TASKLIST = act.TASKLIST;
		    	this.lastView = this.view;
		    	this.view = 'edit_activity';
		    },
		    err => console.error(err)
		);
	}
	saveActivity(event:any) {
		event.preventDefault();
		if(this.view === 'create_activity'){
			this.dataIn.ACTIVIDADES.push(this.activityIn);
			this.view = this.lastView;
			this.activityIn = null;
		}
		if(this.view === 'edit_activity'){
			this.dataIn.ACTIVIDADES[this.dataIn.ACTIVIDADES.indexOf(this.activityEdit)] = this.activityIn;
			this.view = this.lastView;
			this.activityIn = null;
			this.activityEdit = null;
		}
		
	}
	deleteAct(labor:any) {
		if(this.activityIn.TASKLIST.length > 1) this.activityIn.TASKLIST.splice(this.activityIn.TASKLIST.indexOf(labor),1);
	}
	deleteActivity(actividad:Actividad){
		this.dataIn.ACTIVIDADES.splice(this.dataIn.ACTIVIDADES.indexOf(actividad),1);
	}
	newtarea(){
		this.resetForm();
		this.view = 'form';
	}
}
class Task {
	public LUGAR:string;
	public DESCRIPCION:string;
	constructor() {
		this.LUGAR = '';
		this.DESCRIPCION = '';
	}
}
class Actividad {
	public ID_ACTIVIDAD:number;
	public NOMBRE:string;
	public DESCRIPCION:string;
	public TASKLIST:Task[];
	constructor() {
		this.NOMBRE = '';
		this.DESCRIPCION = '';
		this.TASKLIST = [];
		this.nuevaLabor();
	}
	nuevaLabor() {
		this.TASKLIST.push(new Task());
	}
}