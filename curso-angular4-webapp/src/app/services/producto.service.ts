import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './../services/global';


@Injectable ()
export class ProductoService {

  public url: string;

  constructor ( public _http: Http ) {
    this.url = GLOBAL.url;
  }

  getProductos () {

    return  this._http.get(this.url + 'productos')
    .map(res => res.json());

  }

  addProducto(producto: Producto){
    // Se recibe el parametro y se convierte a JSON

    // Se declara la variable con let
    let json = JSON.stringify(producto);

    // Parametros que se le deben enviar a la peticion.
    let params = 'json='+json;

    // Definir los headers, para especificar que es de un ContentType
    // 'application/x-www-form-urlencode' es como el servico rest procesa las peticiones POST
    // puede depender en que este hecho el servicio rest.
    let headers = new Headers({'Content-Type': 'application/json'});


    // Peticion POST
   // razón: falta la cabecera CORS 'Access-Control-Allow-Origin'
    return this._http.post(this.url + 'producto', json, {headers: headers})
    // Mapear la respuesta de la peticion
    .map(res => res.json);

  }

}




