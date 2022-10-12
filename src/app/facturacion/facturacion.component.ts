import { getLocaleDateTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';
import { VariablesGlobalesService } from '../menu/serviceMenu/variables-globales.service';
import { articulo } from '../model/articulo';
import { clientes } from '../model/cliente';
import { facturas } from '../model/factura';
import { GlobalService } from '../services/GserviceGPPD';
@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css'],
})

export class FacturacionComponent implements OnInit {
 ////tabla
 products:any=[];
 /////
 l_fecfa=getLocaleDateTimeFormat
 l_nomCli=""
 l_estCli=""
 l_catCli=""
 l_CantArt=0
 l_codArt=""
 l_nomArt=""
 l_TotalArt=0
 l_precioArt=0
  l_idCliente:any
  l_NumFac=0
  cliente:clientes = new clientes ();
  Factura:facturas = new facturas ();
  Articulo:articulo = new articulo  ();
  datatable:any=[];
  NunFAc:any=[]
  clientes:any=[];
  idclientes:any=[];
  idarticulo:any=[];

  constructor(
    private readonly _rutaDatos: ActivatedRoute,
    private _router:Router,
    private GlobalService:GlobalService,
    private gvariables:VariablesGlobalesService,
    private _bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit(): void {
    this.gvariables.g_empid = {
      id: this._rutaDatos.snapshot.params
    };
    this.GlobalService
    .metodoGet(`https://localhost:44373/Factura/Consultas?usuario=`+this.gvariables.g_empid.id.id)
    .subscribe((res:any) => {
      this.datatable=res.Data;
  console.log(this.datatable)

  for (var i = 0, element; element = this.datatable[i++];) {
    this.NunFAc=element.fac_num
    console.log(this.NunFAc)

  }
for (let i = 0; i < this.NunFAc; i++) {
if (this.NunFAc!=0) {
  this.l_NumFac=this.NunFAc+1
  console.log(this.l_NumFac)
}

}


    });
  }

    buscarcli(){

      this.GlobalService

      .metodoGet(`https://localhost:44373/Cliente/ConsultaNombre?cliente=`+this.l_idCliente+`&usuario=`+this.gvariables.g_empid.id.id)
      .subscribe((res:any) => {
        this.idclientes=res.Data;
      console.log(this.idclientes);
 this.l_nomCli=this.idclientes[0].cli_nom
 this.l_estCli=this.idclientes[0].cli_est
 this.l_catCli=this.idclientes[0].ccl_cod
console.log(this.l_nomCli)
      });


    }
    buscArt(){

      this.GlobalService

      .metodoGet(`https://localhost:44373/Articulo/ConsultaNombre?articulo=`+this.l_codArt+`&usuario=`+this.gvariables.g_empid.id.id)
      .subscribe((res:any) => {
        this.idarticulo=res.Data;
      console.log(this.idclientes);
 this.l_nomArt=this.idarticulo[0].art_nom
 this.l_precioArt=this.idarticulo[0].art_prec
 this.l_TotalArt=this.l_CantArt*this.l_precioArt
console.log(this.l_nomCli)
      });

    }

    enviar(){
let datosJson:any[]=[{
numFAc:this.l_NumFac,
artcod:this.l_codArt,
total:this.l_TotalArt
}]
console.log(datosJson)




    }
}
