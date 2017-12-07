import { PlantillasComponent } from './plantillas/plantillas.component';
import { CochesComponent } from './coches/coches.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//importar componentes
import {EmpleadoComponent} from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';


//Creacion de las rutas.
/**
 * Path de URL
 * Ejemplo:
 * {path: '', component: HomeComponent  }, //path vacio
 * {path:'contacto/:page', component:ContactoComponent}, //nombre del parametro
 * {path:'**', component: EmpleadoComponent} //path que no existe
 */
const appRoutes: Routes = [
  {path: '', component: HomeComponent  },
  {path:'empleado', component: EmpleadoComponent},
  {path:'fruta', component:FrutaComponent},
  {path:'pagina-principal', component:HomeComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'contacto/:page', component:ContactoComponent},
  {path:'coches', component: CochesComponent},
  {path: 'plantillas', component: PlantillasComponent},
  {path:'**', component: EmpleadoComponent}
];


export const appRoutingProviders:any[] = [];

//Para que tome las rutas configuradas.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);



