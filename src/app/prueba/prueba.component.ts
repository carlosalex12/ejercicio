import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { recorrerformulario } from '../menu/serviceMenu/Recorreformulario';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalService } from '../services/GserviceGPPD';
import { formatDate } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PruebaComponent implements OnInit {








  datosforms:FormGroup
  constructor
  (
    private http:HttpClient,
    private router: Router,
    private fb:FormBuilder,
    private _snackBar: MatSnackBar,
    private gservice:GlobalService
  )
  {
    this.datosforms=this.fb.group({
      camp1:new FormControl(''),
      camp2:[''],
      camp3:[''],
      tag:[''],
      })
  }

tabla="cliente"
urlin=""
  ngOnInit(): void {

  }
  element:any



mostrarForm(){

}
  guardar(){
    this.element= document.getElementById("datosform")



console.log('datos form')
console.log(this.element)

this.urlin=this.gservice
.creainser(this.tabla)

console.log(this.urlin)

  }
}
