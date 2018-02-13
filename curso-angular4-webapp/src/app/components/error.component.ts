import { Component } from '@angular/core';


@Component({
  selector: 'error',
  templateUrl: '../views/error.html'
})

// Comando para generar un componente desde consola ng g component nombreModulo/nombreComponente
export class ErrorComponent {
  public titulo: string;

  constructor() {
    this.titulo = "Error !! Página no encontrada";
   }

   ngOnInit(){
     console.log('Componente error.component.ts guardado');
   }

}
