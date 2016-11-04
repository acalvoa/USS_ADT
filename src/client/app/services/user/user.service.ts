import { Injectable} from '@angular/core';
import { Config } from '../../shared/index';
import {Http, Response, Headers} from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
	user:any;
	status:boolean;
	http:Http;
	//construimos los metodos
	constructor(http: Http, private router: Router) {
		this.http = http;
		this.status = false;
	}
	restore() {
		let header = this.createHeaders();
		return this.http.get(Config.API+'/users/me', {
	      headers: header,
	      withCredentials: true
	    })
		.map((res:Response) => {
			let response = res.json();
			if(response.RESPONSE === 200) {
				this.user = response.USER;
				this.status = true;
				return true;
			}
			this.router.navigate(['/login']);
			return false;
		});
	}
	// FOR JWT IMPLEMENTATION (FUTURE)
	// save() {}
	createHeaders() {
		var headers = new Headers();
	    headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return headers;
	}
	login(username:string,password:string) {
		let body = `email=${username}&password=${password}`;
		let header = this.createHeaders();
		return this.http.post(Config.API+'/login/admin',body,{
	      headers: header,
	      withCredentials: true
	    })
		.map((res:Response) => {
			let response = res.json();
			console.log(response);
			if(response.RESPONSE === 200) {
				this.user = response.USER;
				this.status = true;
				return true;
			}
			return false;
		});
	}
	logout() {
		let header = this.createHeaders();
		return this.http.get(Config.API+'/users/logout',{
	      headers: header,
	      withCredentials: true
	    })
		.map((res:Response) => {
			let response = res.json();
			if(response.RESPONSE === 200) {
				this.status = false;
				this.user = null;
				return true;
			}
			return false;
		});
	}
	isLogged() {
		return this.restore();
	}
	getUser() {
		if(this.status) {
			return this.user;
		} else {
			return null;
		}
	}
	isAdmin(){
		if(this.user.ROLE.SUPERUSER) {
			return this.user;
		} else {
			return null;
		}
	}
	getUsers(){
		let header = this.createHeaders();
		return this.http.get(Config.API+'/users',{
	      headers: header,
	      withCredentials: true
	    })
		.map((res:Response) => {
			let response = res.json();
			return response;
		});
	}
}
