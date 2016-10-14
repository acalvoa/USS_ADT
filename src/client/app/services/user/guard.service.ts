import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GuardService implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  	canActivate():Observable<boolean> {
	    return this.user.isLogged();
  	}
}
