import { Producto } from './../models/producto';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService } from '../services/producto.service';


@Component({
  selector:'productos-list',
  templateUrl: '../views/productos-list.html',
  providers:[ProductoService]

})

export class ProductosListComponent {

  public titulo: string;
  public productos: Producto[];
  productosMock: Array<Producto>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productoService: ProductoService
  ) {
    this.titulo = 'Listado de productos';
  }


  ngOnInit() {
    console.log('productos-list.component.ts cargado!!');

    this._productoService.getProductos().subscribe(
      result => {
        console.log('Va pasando por aqui!'+result.status);

        if (result) {
          if (result.productos) {
            console.log('Todo correctamente');
            console.log(result);
            this.productos = result.productos;
          } else {
            this.productos = this.getMocks ();
          }
        } else{
          this.productos = this.getMocks ();
          console.log ('Retorno valor NULL');

        }
      },
      error => {
        console.log('Retorno error!!');
        console.log(<any>error);
      },
      () => {
        console.log('Algo paso!');
      }
    );

  }

  getMocks() {
    console.log ('iniciando productos dummy');

    this.productosMock = [
      new Producto('1', 'escritorio', 'escritorio mod1', '1253.00', 'imagen', '1', new Date() ),
      new Producto('2', 'silla oficina', 'silla mod1', '200.00', 'imagen', '1', new Date()),
      new Producto('23', 'proyector', 'proyector xyz', '3500.00', 'imagen', '1', new Date())
    ];

    return this.productosMock;
  }

}
