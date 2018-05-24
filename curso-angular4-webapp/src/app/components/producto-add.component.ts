import { GLOBAL } from './../services/global';
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
  public filesToUpload;
  public resultUpload;

  constructor (
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Crear nuevo producto';
    this.producto = new Producto('0', '', '', '0', '', '', new Date());
  }

  ngOnInit(){
    console.log('Cargando producto-add');
  }

  onSubmit(){
    console.log(this.producto);

    //En caso de tener imagenes seleccionadas.
    if (this.filesToUpload != undefined && this.filesToUpload.length >= 1) {
      /*this._productoService.makeFileRequest(GLOBAL.url + 'producto/image/' + this.producto, [], this.filesToUpload).then(
        result => {
          console.log('FileName: ' + result);
          this.resultUpload = result;
           this.producto.imagen = this.resultUpload.filename;
           this.saveProducto();
        },
        error => {
          console.log(error);
        }
      );*/
      this.saveProducto();
    } else {
      this.saveProducto();
    }


  }

  saveProducto() {
// El metodo subscribe es para recoger la respuesta
    this._productoService.addProducto(this.producto)
    .subscribe(
      response => {
        console.log('Codigo de respuesta: ' + response);
        if (response) {
          if (response.status == 200) {
            console.log('Estatus correcto!!');
          }
            this._router.navigate(['/productos']);
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(<any>error);
      }
    );

  }


  fileChangeEvent(fileInput: any) {
    // Recoge los ficheros y los monta en un array
    this.filesToUpload = <Array<File>> fileInput.target.files;
    console.log('Cargando..' + this.filesToUpload);


    if (fileInput.target.files && fileInput.target.files.length > 0) {
      const file = fileInput.target.files[0];
      this.producto.imagen = file.name;
      console.log('Image Name: ' + this.producto.imagen);
    } else {
      console.log('No asigno el nombre de laa imagen');
    }
  }

}
