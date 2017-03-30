import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { ModulesModule } from './modules/modules.module';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { AlertsComponent } from './modules/alerts/alerts.component';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
		ModulesModule,
		SharedModule,
		ServicesModule
	],
	declarations: [AppComponent,AlertsComponent],
	providers: [{
		provide: APP_BASE_HREF,
		useValue: '<%= APP_BASE %>'
	}],
	bootstrap: [AppComponent]

})

export class AppModule { }
