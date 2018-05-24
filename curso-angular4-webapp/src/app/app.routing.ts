
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

// Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { FilterProgramComponent } from './components/filter-program.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosListComponent},
  {path: 'crear-productos', component: ProductoAddComponent},
  {path: 'filter-program', component: FilterProgramComponent},
  {path: '**', component: ErrorComponent}
];

// Cargar los servicios necesarios del router para que todas las rutas funcionen.
export const appRoutingProviders: any[] = [];

// Array de rutas para establecer la configuracion de Rutas en la aplicacion.
// Se deben cargar en el appModule.
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
