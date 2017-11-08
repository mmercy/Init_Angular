import { PeticionesService } from './../services/peticiones.service';
import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({
  selector: 'coches',
  templateUrl:  './coches.component.html',
  providers:[PeticionesService]

})


export class CochesComponent{
  public coche: Coche;
  public coches: Array<Coche>;


  constructor(private _peticionesService: PeticionesService){
    this.coche = new Coche("","", "");
    this.coches = [
      new Coche("Audi A5","120", "Gris"),
      new Coche("Renault","125", "Cafe Metalico")
    ];
  }

  ngOnInit(){
    let result = this._peticionesService.getPrueba();
    console.log("Recibio: " + result);
  }


  onSubmit(){
    this.coches.push(this.coche);
    this.coche = new Coche("", "", "");
    console.log(this.coche);
  }

}

