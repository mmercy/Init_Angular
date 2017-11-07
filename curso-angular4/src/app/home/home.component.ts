import { RopaService } from './../services/ropa.service';
import { Component } from '@angular/core';


@Component({
  selector:'home',
  templateUrl:'./home.component.html',
  providers:[RopaService]
})

export class HomeComponent{

  public titulo:string = 'Pagina principal';

  constructor(
    private _ropaService: RopaService
  ){}

  ngOnInit(){
    console.log('Tipo de Ropa: ' + this._ropaService.prueba('camiseta'));
  }

}
