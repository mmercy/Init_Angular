import { FilterProgramService } from './../services/filterProgram.service';
import { Producto } from './../models/producto';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'filter-program',
  templateUrl: '../views/filter-program.html',
  providers: [FilterProgramService]
})


export class FilterProgramComponent {
  public titulo: string;
  public producto: Producto;


  ngOnInit() {
    this.titulo = 'Filtrado!';
    console.log('Cargando componente de filtrado!');
  }

  onSubmit() {
    console.log('Submit de formulario de filtrado!');
  }
}
