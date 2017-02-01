import { NgModule } from '@angular/core';

import { LugaresComponent } from './lugares.component';
import { RestService } from '../../../services/index';
import { DatatableModule } from '../../../shared/index';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';

@NgModule({
    imports: [DatatableModule,Ng2AutoCompleteModule],
    declarations: [LugaresComponent],
    exports: [LugaresComponent],
    providers: [RestService]
})

export class LugaresModule { }
