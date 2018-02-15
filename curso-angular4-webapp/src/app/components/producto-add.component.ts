import { Producto } from './../models/producto';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'producto-add',
  templateUrl: '../views/producto-add.html',
  providers: [ProductoService]
})

export class ProductoAddComponent {
  public titulo: string;
  public producto: Producto;

  constructor (
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Crear nuevo producto';
    this.producto = new Producto('0', '', '', 0, '');
  }

  ngOnInit(){
    console.log('Cargaando producto-add');
  }

  onSubmit(){
    console.log(this.producto);

    // El metodo subscribe es para recoger la respuesta
    this._productoService.addProducto(this.producto)
    .subscribe(
      response => {
        console.log('Codigo de respuesta: ' + response.status);
        if (response.status == 200) {
            this._router.navigate(['/home']);
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }


}
