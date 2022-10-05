import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { articulo } from '../model/articulo';
import { articuloService } from '../services/articulo.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { VariablesGlobalesService } from '../menu/serviceMenu/variables-globales.service';
@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  l_nombreEs="";
  art_cod="";

  art_est="";

  art_nom="";

  art_prec=0;

  car_cod="";

  emp_cod="";

  articulo:articulo = new articulo();
  datatable:any=[];
  displayedColumns: string[] = ['art_cod', 'art_est', 'art_nom', 'art_prec','car_cod', 'emp_cod','car_nom'];
  constructor(

    private readonly _rutaDatos: ActivatedRoute,
    private _router:Router,
    private articuloservice:articuloService,
    private gvariables:VariablesGlobalesService
    ) { }

  ngOnInit(): void {
    this.l_nombreEs=this.gvariables.g_user
    console.log('nombre')
    console.log(this.l_nombreEs)
    this.gvariables.g_empid = {
      id: this._rutaDatos.snapshot.params
    };
    this.ondatatable();
  }


  ondatatable(){
    this.articuloservice

    .metodoGet(`https://localhost:44373/Articulo/Consultas?usuario=`+this.gvariables.g_empid.id.id)
    .subscribe((res:any) => {
      this.datatable=res.Data;

    ///datasource si iguala ala respuesta del get para imprimir los datos
this.dataSource.data=this.datatable
    console.log(res.Data);
    });




    }
    dataSource = new MatTableDataSource<articulo>(this.datatable.Data);
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    onSetData(select:any){
      this.articulo.art_cod=select.art_cod;
      this.articulo.art_est=select.art_est;
      this.articulo.art_nom=select.art_nom;
      this.articulo.art_prec=select.art_prec;
      this.articulo.car_cod=select.car_cod;
      this.articulo.emp_cod=select.emp_cod;
      }


}
