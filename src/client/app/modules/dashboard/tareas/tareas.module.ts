import { NgModule } from '@angular/core';

import { TareasComponent } from './tareas.component';
import { RestService } from '../../../services/index';
import { DatatableModule } from '../../../shared/index';


@NgModule({
    imports: [DatatableModule],
    declarations: [TareasComponent],
    exports: [TareasComponent],
    providers: [RestService]
})

export class TareasModule { }
