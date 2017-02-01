import { NgModule } from '@angular/core';

import { InventarioComponent } from './inventario.component';
import { RestService } from '../../../services/index';
import { DatatableModule } from '../../../shared/index';


@NgModule({
    imports: [DatatableModule],
    declarations: [InventarioComponent],
    exports: [InventarioComponent],
    providers: [RestService]
})

export class InventarioModule { }
