import { NgModule } from '@angular/core';

import { LugaresComponent } from './lugares.component';
import { RestService } from '../../../services/index';
import { DatatableModule } from '../../../shared/index';


@NgModule({
    imports: [DatatableModule],
    declarations: [LugaresComponent],
    exports: [LugaresComponent],
    providers: [RestService]
})

export class LugaresModule { }
