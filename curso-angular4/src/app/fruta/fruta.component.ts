import {Component} from '@angular/core';

@Component({
	selector:'fruta',
	templateUrl:'./fruta.component.html'
	/*template: `
	<h2>{{nombre_componente}} </h2>
	<p> {{listado_fruta}} </p>`*/

})
export class FrutaComponent{
	public nombre_componente = 'Componente Fruta';
	public listado_fruta = 'Naranja, Manzana, Pera y Sandia';
}