import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'producto-add',
  templateUrl: '../views/producto-add.html',
  providers: [ProductoService]
})

export class ProductoAddComponent {
  public titulo: string;

  constructor () {
    this.titulo = 'Crear nuevo producto';
  }

  ngOnInit(){
    console.log('Cargaando producto-add');
  }

}
