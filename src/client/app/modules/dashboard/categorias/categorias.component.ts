import { Component } from '@angular/core';
import { RestService } from '../../../services/index';

@Component({
	moduleId: module.id,
    selector: 'categorias-module',
    templateUrl: 'categorias.component.html',
    styleUrls: ['categorias.component.css'],

})

export class CategoriasComponent {
	private rest:RestService;
	private view:string;
	private categorias:any[];
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
		this.rest.get('/categoria').subscribe(
		    data => {
		    	this.categorias = data;
		    },
		    err => console.error(err)
		);
	}
	save(event:any) {
		event.preventDefault();
		if(this.view === 'form') {
			this.rest.post(this.dataIn, '/categoria').subscribe(
			    data => {
			    	this.categorias.push(data);
			    	this.view = 'visor';
			    	this.resetForm();
			    },
			    err => console.error(err)
			);
		}
		if(this.view === 'edit') {
			this.rest.put(this.dataEdit.ID_CATEGORIA, '/categoria', this.dataIn).subscribe(
			    data => {
			    	this.categorias[this.categorias.indexOf(this.dataEdit)] = data;
			    	this.view = 'visor';
			    	this.resetForm();
			    },
			    err => console.error(err)
			);
		}
	}
	goEdit(obj:any) {
		this.dataEdit = obj;
		this.dataIn.NOMBRE = obj.NOMBRE;
		this.dataIn.DESCRIPCION = obj.DESCRIPCION;
		this.dataIn.COLOR = obj.COLOR;
		this.view = 'edit';
	}
	delete(obj:any) {
		this.rest.delete(obj.ID_CATEGORIA, '/categoria').subscribe(
		    data => {
		    	this.categorias.splice(this.categorias.indexOf(obj),1);
		    },
		    err => console.error(err)
		);
	}
	resetForm() {
		this.dataIn = {
			NOMBRE: '',
			DESCRIPCION: '',
			COLOR: '',
			ROOT: true
		};
	}
}
