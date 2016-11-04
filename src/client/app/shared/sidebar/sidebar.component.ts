import { Component, Input} from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
	moduleId: module.id,
	selector: 'sidebar-cmp',
	templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SidebarComponent {
	@Input() isActive:boolean;
	showMenu: string = '';
	private admin:boolean;
	// eventCalled() {
	// 	this.isActive = !this.isActive;
	// }
	constructor(user:UserService){
		this.admin = user.isAdmin();
	}
	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
}
