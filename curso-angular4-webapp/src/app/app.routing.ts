import { ProductosListComponent } from './components/productos-list.component';

import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosListComponent},
  {path: '**', component: ErrorComponent}
];

// Cargar los servicios necesarios del router para que todas las rutas funcionen.
export const appRoutingProviders: any[] = [];

// Array de rutas para establecer la configuracion de Rutas en la aplicacion.
// Se deben cargar en el appModule.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

