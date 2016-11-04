import { Component } from '@angular/core';
import { UserService } from '../../../services/index';
import { RestService } from '../../../services/index';

@Component({
	moduleId: module.id,
    selector: 'users-module',
    templateUrl: 'users.component.html',
    styleUrls: ['users.component.css'],

})

export class UsersComponent {
	private user:UserService;
	private rest:RestService;
	private datas:any[] = [];
	private sedes:any[] = [];
	private areas:any[] = [];
	//PANTALLA
	//ELEMENTO
	private dataIn:any;
	private dataEdit:any;
	private view:string;
	//CONSTRUCTOR
	constructor(user:UserService, rest:RestService) {
		this.rest = rest;
		this.user = user;
		this.user.isAdmin();
		this.resetForm();
		this.getuser();
		this.fetch();
		this.view = 'visor';
	}
	getuser() {
		this.user.getUsers().subscribe(
		    data => {
		    	if(data[0].EMAIL === 'root@uss.cl') data.splice(0,1);
		    	this.datas = data;
		    },
		    err => console.error(err)
		);
	}
	fetch() {
		this.rest.get('/area').subscribe(
		    data => {
		    	this.areas = data;
		    },
		    err => console.error(err)
		);
		this.rest.get('/sedes').subscribe(
		    data => {
		    	this.sedes = data.sedes;
		    },
		    err => console.error(err)
		);
	}
	createUser(event:any) {
		event.preventDefault();
		if(this.view === 'create') {
			this.rest.post(this.dataIn, '/users').subscribe(
			    data => {
			    	data.SEDE = this.searchSede(data.SEDE);
			    	data.AREA = this.searchArea(data.AREA);
			    	this.datas.push(data);
			    	this.view = 'visor';
			    	this.resetForm();
			    },
			    err => console.error(err)
			);
		} else {
			this.rest.put(this.dataEdit.ID_USER, '/users', this.dataIn).subscribe(
			    data => {
			    	this.datas[this.datas.indexOf(this.dataEdit)] = data;
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
	searchArea(value:number) {
		for(let i=0; i<this.areas.length; i++) {
			if(this.areas[i].ID_AREA === value) return this.areas[i];
		}
		return null;
	}
	goEdit(obj:any) {
		this.dataEdit = obj;
		this.dataIn = JSON.parse(JSON.stringify(obj));
		this.dataIn.SEDE =  this.dataIn.SEDE.ID_SEDE;
		this.dataIn.AREA =  this.dataIn.AREA.ID_AREA;
		this.dataIn.ROLE =  this.dataIn.ROLE.ID_ROLE;
		delete this.dataIn.ID_USER;
		delete this.dataIn.PASSWORD;
		delete this.dataIn.createdAt;
		delete this.dataIn.updatedAt;
		this.view = 'edit';
	}
	delete(obj:any) {
		this.rest.delete(obj.ID_USER, '/users').subscribe(
		    data => {
		    	this.datas.splice(this.datas.indexOf(obj),1);
		    },
		    err => console.error(err)
		);
	}
	resetForm() {
		this.dataIn = {
			NAME: '',
			LASTNAME: '',
			EMAIL: '',
			PASSWORD: '',
			SEDE: '',
			ROLE:1,
			AREA: ''
		};
	}
}
