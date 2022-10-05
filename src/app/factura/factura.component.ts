import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { articulo } from '../model/articulo';
import { Router } from '@angular/router';
import { VariablesGlobalesService } from '../menu/serviceMenu/variables-globales.service';
import { facturaservices } from '../services/facturaservice';
import { facturas } from '../model/factura';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  Factura:facturas = new facturas ();
  datatable:any=[];
  displayedColumns: string[] = ['emp_cod', 'fac_num', 'fac_fec', 'fac_est','fac_total','cli_cod'];
  constructor(

    private readonly _rutaDatos: ActivatedRoute,
    private _router:Router,
    private factura:facturaservices,
    private gvariables:VariablesGlobalesService
  ) { }

  ngOnInit(): void {

    console.log('nombre')

    this.gvariables.g_empid = {
      id: this._rutaDatos.snapshot.params
    };
    this.ondatatable();
  }


  ondatatable(){
    this.factura

    .metodoGet(`https://localhost:44373/Factura/Consultas?usuario=`+this.gvariables.g_empid.id.id)
    .subscribe((res:any) => {
      this.datatable=res.Data;

    ///datasource si iguala ala respuesta del get para imprimir los datos
this.dataSource.data=this.datatable
    console.log(res.Data);
    });}


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
      this.Factura.emp_cod=select.art_cod;
      this.Factura.fac_num=select.art_est;
      this.Factura.fac_fec=select.art_nom;
      this.Factura.fac_est=select.art_prec;
      this.Factura.fac_total=select.car_cod;
      this.Factura.cli_cod=select.car_cod;

      }

}
