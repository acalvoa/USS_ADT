import { Component } from '@angular/core';
import { RestService } from '../../../services/index';
import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
    selector: 'lugares-module',
    templateUrl: 'lugares.component.html',
    styleUrls: ['lugares.component.css'],

})

export class LugaresComponent {
	private rest:RestService;
	private view:string;
	private lugares:any[];
	private sedes:any[];
	private dataEdit:any;
	private dataIn:any;
	private tab:string;
	private inv:any[];
	private selected_inv:any;
	//CONSTRUCTOR
	constructor(rest:RestService) {
		this.view = 'visor';
		this.tab = 'admin';
		this.rest = rest;
		this.fetch();
		this.fetchSedes();
		this.resetForm();
	}
	fetch() {
		this.rest.get('/lugar').subscribe(
		    data => {
		    	this.lugares = data;
		    },
		    err => console.error(err)
		);
		this.rest.get('/inventario/getallbytag').subscribe(
		    data => {
		    	this.inv = data;
		    },
		    err => console.error(err)
		);
	}
	fetchSedes(sea:string) {
		this.rest.get('/sedes').subscribe(
		    data => {
		    	if(data.response === 200) {
		    		this.sedes = data.sedes;
		    	}
		    },
		    err => console.error(err)
		);
	}
	inventario(search:string){
		return this.inv;
		// return this.rest.getWithParam({
		// 	search: search
		// },'/inventario/getbytag').subscribe(
		//     data => {
		//     	if(data.response === 200) {
		//     		this.sedes = data.sedes;
		//     	}
		//     },
		//     err => console.error(err)
		// );
	}
	addinv(){
		if(this.selected_inv){
			return this.rest.get('/inventario/'+this.selected_inv.key).subscribe(
			    data => {
			    	this.dataIn.INVENTARIO.push(data);
			    },
			    err => console.error(err)
			);
		}
		return null;
	}
	save(event:any) {
		event.preventDefault();
		if(this.view === 'form') {
			var obj = JSON.parse(JSON.stringify(this.dataIn));
			var inv:any[] = [];
			for(let i=0;i<obj.INVENTARIO.length;i++){
				inv.push(obj.INVENTARIO[i].ID_INVENTARIO);
			}
			obj.INVENTARIO = inv;
			console.log(obj);
			this.rest.post(obj, '/lugar').subscribe(
			    data => {
			    	data.SEDE = this.searchSede(data.SEDE);
			    	this.lugares.push(data);
			    	this.view = 'visor';
			    	this.resetForm();
			    },
			    err => console.error(err)
			);
		}
		if(this.view === 'edit') {
			this.rest.put(this.dataEdit.ID_LUGAR, '/lugar', this.dataIn).subscribe(
			    data => {
			    	this.lugares[this.lugares.indexOf(this.dataEdit)] = data;
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
		    	this.lugares.splice(this.lugares.indexOf(obj),1);
		    },
		    err => console.error(err)
		);
	}
	resetForm() {
		this.dataIn = {
			NOMBRE_LUGAR: '',
			SEDE: '',
			INVENTARIO: []
		};
	}
	deleteItem(item:any){
		this.dataIn.INVENTARIO.splice(this.dataIn.INVENTARIO.indexOf(item),1);
	}
}
