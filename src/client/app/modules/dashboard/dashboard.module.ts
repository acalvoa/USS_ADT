import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap';
import { HomeModule } from './home/home.module';
import { DatatableModule } from '../../shared/index';
import { InventarioModule } from './inventario/index';

// import { ChartModule } from './examples/charts/chart.module';
// import { BlankPageModule } from './blank-page/blankPage.module';
// import { TableModule } from './examples/tables/table.module';
// import { FormModule } from './examples/forms/forms.module';
// import { GridModule } from './examples/grid/grid.module';
// import { BSComponentModule } from './examples/bs-component/bsComponent.module';
// import { BSElementModule } from './examples/bs-element/bsElement.module';

import { DashboardComponent } from './dashboard.component';

import {NavbarComponent} from '../../shared/index';
import {SidebarComponent} from '../../shared/index';
import {UsersModule} from './users/users.module';
import {SedesModule} from './sedes/sedes.module';
import {AreasModule} from './areas/areas.module';
import {LugaresModule} from './lugares/lugares.module';
import {TareasModule} from './tareas/tareas.module';
import {CategoriasModule} from './categorias/categorias.module';


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule,
    	HomeModule,
        UsersModule,
        SedesModule,
        AreasModule,
        LugaresModule,
        DatatableModule,
        TareasModule,
        CategoriasModule,
        InventarioModule
    ],
    declarations: [DashboardComponent, NavbarComponent, SidebarComponent],
    exports: [DashboardComponent, NavbarComponent, SidebarComponent]
})

export class DashboardModule { }
