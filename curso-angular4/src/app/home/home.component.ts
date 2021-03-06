import { RopaService } from './../services/ropa.service';
import { Component } from '@angular/core';


@Component({
  selector:'home',
  templateUrl:'./home.component.html',
  providers:[RopaService]
})

export class HomeComponent{

  public titulo:string = 'Pagina principal';
  public listado_ropa : Array<string>;
  public prenda_a_guardar: string;
  public fecha;
  public nombre = "JUAN LOPEZ HDZ";

  constructor(
    private _ropaService: RopaService
  ){
    this.fecha = new Date(2017, 4, 15);
  }

  ngOnInit(){
    this.listado_ropa = this._ropaService.getRopa();
    console.log('Tipo de Ropa: ' + this.listado_ropa);
  }

  guardarPrenda(){
    this._ropaService.addRopa(this.prenda_a_guardar);
    this.prenda_a_guardar = null;
  }
  eliminarPrenda(index:number){
    console.log('Index: ' + index);
    this._ropaService.deleteRopa(index);
  }

}
