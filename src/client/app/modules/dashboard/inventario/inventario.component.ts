import { Component } from '@angular/core';
import { RestService } from '../../../services/index';

@Component({
	moduleId: module.id,
    selector: 'inventario-module',
    templateUrl: 'inventario.component.html',
    styleUrls: ['inventario.component.css'],

})

export class InventarioComponent {
	private rest:RestService;
	private view:string;
	private inventario:any[];
	private tipos:any[];
	private sedes:any[];
	private dataEdit:any;
	private dataIn:any;
	private tab:string;
	//CONSTRUCTOR
	constructor(rest:RestService) {
		this.view = 'visor';
		this.rest = rest;
		this.tab = 'inventario';
		this.fetch();
		this.resetForm();
	}
	fetch() {
		this.rest.get('/inventario').subscribe(
		    data => {
		    	this.inventario = data;
		    },
		    err => console.error(err)
		);
		this.rest.get('/CATEGORIA_INVENTARIO').subscribe(
		    data => {
		    	this.tipos = data;
		    },
		    err => console.error(err)
		);
	}
	save(event:any, type:string) {
		event.preventDefault();
		if(type == 'inventario'){
			if(this.view === 'form_inv') {
				this.rest.post(this.dataIn, '/inventario').subscribe(
				    data => {
				    	this.inventario.push(data);
				    	this.view = 'visor';
				    	this.resetForm();
				    },
				    err => console.error(err)
				);
			}
			if(this.view === 'edit_inv') {
				this.rest.put(this.dataEdit.ID_INVENTARIO, '/inventario', this.dataIn).subscribe(
				    data => {
				    	this.inventario[this.inventario.indexOf(this.dataEdit)] = data;
				    	this.view = 'visor';
				    	this.resetForm();
				    },
				    err => console.error(err)
				);
			}
		}
		else{
			if(this.view === 'form_tipos') {
				this.rest.post(this.dataIn, '/CATEGORIA_INVENTARIO').subscribe(
				    data => {
				    	this.tipos.push(data);
				    	this.view = 'visor';
				    	this.resetForm();
				    },
				    err => console.error(err)
				);
			}
			if(this.view === 'edit_tipos') {
				this.rest.put(this.dataEdit.ID_CATEGORIA, '/CATEGORIA_INVENTARIO', this.dataIn).subscribe(
				    data => {
				    	this.tipos[this.tipos.indexOf(this.dataEdit)] = data;
				    	this.view = 'visor';
				    	this.resetForm();
				    },
				    err => console.error(err)
				);
			}
		}
		
	}
	goEdit(obj:any, type:string) {
		if(type == 'inv'){
			this.dataEdit = obj;
			this.dataIn = JSON.parse(JSON.stringify(obj));
			this.dataIn.TIPO = obj.TIPO.ID_CATEGORIA;
			this.view = 'edit_inv';
		}
		else{
			this.dataEdit = obj;
			this.dataIn = obj;
			this.view = 'edit_tipos';
		}
		
	}
	delete(obj:any, type:string) {
		this.rest.delete(obj.ID_LUGAR, '/inventario').subscribe(
		    data => {
		    	this.inventario.splice(this.inventario.indexOf(obj),1);
		    },
		    err => console.error(err)
		);
	}
	showInv() {
		this.view='form_inv';
		this.resetForm();
	}
	showtipos() {
		this.view='form_tipos';
		this.resetFormTipos();
	}
	resetForm() {
		this.dataIn = {
			TIPO: '',
		  	MARCA:'',
		  	MODELO:'',
		  	CODIGO:'',
		  	OBSERVACION: ''
		};
	}
	resetFormTipos() {
		this.dataIn = {
			NOMBRE: '',
		  	DESCRIPCION:''
		};
	}
}
