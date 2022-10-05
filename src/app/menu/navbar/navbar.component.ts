import { Component, OnInit } from '@angular/core';
import { VariablesGlobalesService } from '../serviceMenu/variables-globales.service';
import { Router } from '@angular/router';
import { articuloService } from 'src/app/services/articulo.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  articulo(){
    this.articuloservice

    .metodoGet(`https://localhost:44373/Articulo/ConsultaArticulo?usuario=`+ this.Gvariables.g_empid.id.id)
    .subscribe((resultadoMetodoGet:any) => {
      console.log("resultadoMetodoGet");
    console.log(resultadoMetodoGet)});

    this._router.navigate(
      [`/articulo/`+ this.Gvariables.g_empid.id.id]
    )

  }
  constructor(private Gvariables:VariablesGlobalesService,
    private _router:Router,
    private articuloservice:articuloService
    ) { }

  ngOnInit(): void {
  }

}
