import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//importar componentes
import {EmpleadoComponent} from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


//Creacion de las rutas.
const appRoutes: Routes = [
  {path: '', component: HomeComponent  }, //path vacio
  {path:'empleado', component: EmpleadoComponent},
  {path:'fruta', component:FrutaComponent},
  {path:'pagina-principal', component:HomeComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'**', component: EmpleadoComponent} //path que no existe
];


export const appRoutingProviders:any[] = [];

//Para que tome las rutas configuradas.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



