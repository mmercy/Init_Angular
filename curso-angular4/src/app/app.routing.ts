
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//importar componentes
import {EmpleadoComponent} from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';


const appRoutes: Routes = [
  {path: '', component: EmpleadoComponent  },
  {path:'empleado', component: EmpleadoComponent},
  {path:'fruta', component:FrutaComponent},
  {path:'**', component: EmpleadoComponent}
];


export const appRoutingProviders:any[] = [];

//Para que tome las rutas configuradas.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



