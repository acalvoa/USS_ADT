import { Component } from '@angular/core';
import { UserService } from '../../services/index';
import { Router } from '@angular/router';
/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html'
})

export class LoginComponent {
	private email:string;
	private password:string;
	private user:UserService;
	private router:Router;

	constructor(user:UserService, router:Router) {
		this.user = user;
		this.router = router;
	}

	login() {
		this.user.login(this.email,this.password)
		.subscribe(
		    data => {
		    	this.router.navigateByUrl('/');
		    },
		    err => console.error(err)
		);
	}
}
