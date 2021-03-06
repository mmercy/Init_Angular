import {Component} from '@angular/core';

import { Empleado } from './empleado';

@Component({
	selector: 'empleado-tag',
	templateUrl : './empleado.component.html'

})


export class EmpleadoComponent {
  public title = 'Componente Empleados.';
  public empleado:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajador_externo: boolean;
  public color: string;
  public color_seleccionado:string;

  constructor(){
    //se puede crear un objeto empleado.
    this.empleado = new Empleado('George Sfag',34, 'chef',  false);
    this.trabajadores = [
      new Empleado('Mamel Sfag',34, 'Gerente',  true),
      new Empleado('Arianda',33, 'jefa de piso',  true),
      new Empleado('Anny Gomz',61, 'Atencion a clientes',  true)
    ];
    this.trabajador_externo = true;
    this.color = 'green';
    this.color_seleccionado = '#CCC';
  }

  ngOnInit() {
    console.log(this.empleado);
  }

  cambiarExterno(valor){
    this.trabajador_externo = valor;
  }

  logColorSeleccionado(){
    console.log("Color seleccionado:" + this.color_seleccionado)
  }
}
