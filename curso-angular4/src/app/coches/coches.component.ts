import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
  selector: 'coches',
  templateUrl:  './coches.component.html'

})


export class CochesComponent{
  public coche: Coche;
  public coches: Array<Coche>;

  constructor(){
    this.coche = new Coche("","", "");
    this.coches = [
      new Coche("Audi A5","120", "Gris"),
      new Coche("Renault","125", "Cafe Metalico")
    ];
  }

  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("", "", "");
    console.log(this.coche);
  }

}

