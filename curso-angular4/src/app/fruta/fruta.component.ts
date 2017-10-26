import {Component} from '@angular/core';

/* Decoradores permite indicar propiedades al componente*/
@Component({
	selector:'fruta',
	templateUrl:'./fruta.component.html'
})

export class FrutaComponent{
	public nombre_componente = 'Componente Fruta';
	public listado_fruta = 'Naranja, Manzana, Pera y Sandia';

  //Se saltara la visibilidad.
  private hola = 'Soy privada';

  public nombre:string = 'Jan Perez';
  public edad:number = 66;
  public mayorDeEdad:boolean = true;
  public trabajos:Array<string> = ['Carpintero', 'Albañil', 'Fontanero'];

  comodin:any = 'Cualquier cosa';

}
