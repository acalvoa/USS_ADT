import { Route} from '@angular/router';
import { HomeRoutes } from './home/index';
import { GuardService } from '../../services/index';
// import { ChartRoutes } from './examples/charts/index';
// import { BlankPageRoutes } from './blank-page/index';
// import { TableRoutes } from './examples/tables/index';
// import { FormRoutes } from './examples/forms/index';
// import { GridRoutes } from './examples/grid/index';
// import { BSComponentRoutes } from './examples/bs-component/index';
// import { BSElementRoutes } from './examples/bs-element/index';

import { DashboardComponent } from './index';
import { UsersRoutes } from './users/index';
import { AreasRoutes } from './areas/index';
import { LugaresRoutes } from './lugares/index';
import { SedesRoutes } from './sedes/index';
import { TareasRoutes } from './tareas/index';
import { CategoriasRoutes } from './categorias/index';


export const DashboardRoutes: Route[] = [
  	{
    	path: '',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
        ...UsersRoutes,
        ...SedesRoutes,
        ...AreasRoutes,
        ...LugaresRoutes,
        ...TareasRoutes,
        ...CategoriasRoutes
	    	// ...ChartRoutes,
	    	// ...BSComponentRoutes,
      //       ...TableRoutes,
	    	// ...BlankPageRoutes,
      //       ...FormRoutes,
      //       ...GridRoutes,
      //       ...BSElementRoutes
    	],
      canActivate: [GuardService]
  	}
];
