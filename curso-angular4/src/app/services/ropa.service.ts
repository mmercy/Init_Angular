import {Injectable} from '@angular/core';

/**
 * Forma de declarar un servicio.
 */
@Injectable()
export class RopaService{
  public nombre_prenda = 'pantalones Vaqueros';
  public coleccion_ropa = ['pantalon blanco', 'blusa rosa'];

  prueba(nombre_prenda){
    console.log('Ejecutando metodo prueba');
    return nombre_prenda;
  }

  addRopa(nombre_prenda:string):Array<string>{
    this.coleccion_ropa.push(nombre_prenda);
    return this.getRopa();
  }

  getRopa():Array<string>{
    return this.coleccion_ropa;
  }

  deleteRopa(index:number):Array<string>{
    this.coleccion_ropa.splice(index, 1);
    return this.getRopa();
  }
}


