import { NgModule } from '@angular/core';
import { UserService } from './index';
import { RestService } from './index';
import { AlertService } from './index';
import { GuardService } from './user/guard.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [HttpModule],
  declarations: [],
  providers: [GuardService,UserService,RestService,AlertService],
  exports:[]
})

export class ServicesModule {
}
