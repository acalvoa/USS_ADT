import { NgModule } from '@angular/core';

import { CategoriasComponent } from './categorias.component';
import { RestService } from '../../../services/index';
import { DatatableModule } from '../../../shared/index';


@NgModule({
    imports: [DatatableModule],
    declarations: [CategoriasComponent],
    exports: [CategoriasComponent],
    providers: [RestService]
})

export class CategoriasModule { }
