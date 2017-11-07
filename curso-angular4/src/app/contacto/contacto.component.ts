import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';




@Component({
  selector:'contacto',
  templateUrl:'./contacto.component.html'
})

export class ContactoComponent{

  public titulo:string = 'Pagina de contacto de la web';
  public parametro;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router ){}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //Recorrer los parametros
    this._route.params.forEach((params:Params) => {
      this.parametro = params['page'];
      console.log(params);
    });

  }
  redirigir(){
    this._router.navigate(['/contacto', 'victorroblesweb.es']);
  }
  redirigirDos(){
    this._router.navigate(['/pagina-principal']);
  }
}
