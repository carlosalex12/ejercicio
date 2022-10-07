import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class recorrerformulario {


  recorrer (datos:any):any {
    for(var i = 1; i < datos.elements.length - 1 ; i++) {
      i=datos;
     }
     return i
  }


  constructor() {
   }
}
