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

  public nombre:string ;
  public edad:number;
  public mayorDeEdad:boolean;
  public trabajos:Array<string>;

  comodin:any ;

  constructor(){
    console.log(this.comodin);
    this.comodin = 2369;
    console.log('Valor comodin: '+ this.comodin);

    this.nombre = 'Victor Robles';
    this.edad = 34;
    this.mayorDeEdad = false;
    this.comodin = 'SI';
    console.log('comodin: '+ this.comodin + ' Trabajos:'+ this.trabajos);



  }


  ngOnInit() {
    this.cambiarNombre();
    this.cambiarEdad(55);
    console.log('ngOnInit: ' +this.nombre + ' ->' + this.edad);

    //variables y alcance
    var uno = 8;
    var dos = 15;

    if(uno == 8){
      let uno = 3;
      var dos = 88;

      console.log('Dentro del if.' + uno);
    }

    console.log('Fuera del if: '+ uno+ ' <> ' + dos);
  }

  cambiarNombre() {
    this.nombre = 'Juan Lopez';

  }

  cambiarEdad(edad){
    this.edad = edad;
  }

}
