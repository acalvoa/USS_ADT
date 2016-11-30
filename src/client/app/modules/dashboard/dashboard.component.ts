import { Component } from '@angular/core';
import { UserService } from '../../services/index';
import { Router } from '@angular/router';

/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'dashboard-cmp',
	templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent {
	public sidebar:boolean;
	private user:any;
	private user_service:UserService;
	private router:Router;

	constructor(user:UserService, router:Router) {
		this.sidebar = true;
		this.router = router;
		this.user_service = user;
		this.user = this.user_service.getUser();
	}
	toggleSidebar() {
		this.sidebar = !this.sidebar;
	}
}
