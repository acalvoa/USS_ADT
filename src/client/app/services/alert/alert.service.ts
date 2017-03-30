import { Injectable} from '@angular/core';
import { Config } from '../../shared/index';
import {Http, Response, Headers} from '@angular/http';
import { AlertsComponent } from '../../modules/alerts/alerts.component';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AlertService {
	alerts:AlertsComponent;
	//construimos los metodos
	constructor() {
	}
	reg_alert(alert:AlertsComponent){
		this.alerts = alert;
	}
	success(message:string){
		this.alerts.success(message);
	}
	info(message:string){
		this.alerts.info(message);
	}
	warning(message:string){
		this.alerts.warning(message);
	}
	error(message:string){
		this.alerts.error(message);
	}
}
