import { FilterProgram } from './../models/filterProgram';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Producto } from '../models/producto';
import { GLOBAL } from './../services/global';


@Injectable ()
export class FilterProgramService {



  addConfiguration(filterProgram: FilterProgram){
    console.log('Filttro:: ' + filterProgram);

  }

  onSubmit(){
    console.log('Submit of form Filter!!');
  }

}
