import {Injectable} from '@angular/core';

/**
 * Forma de declarar un servicio.
 */
@Injectable()
export class RopaService{
  public nombre_prenda = 'pantalones Vaqueros';

  prueba(nombre_prenda){
    console.log('Ejecutando metodo prueba');
    return nombre_prenda;
  }

}


