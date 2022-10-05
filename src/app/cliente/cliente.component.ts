import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { articulo } from '../model/articulo';
import { articuloService } from '../services/articulo.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { VariablesGlobalesService } from '../menu/serviceMenu/variables-globales.service';
import { clienteservice } from '../services/clienteservice';
import { clientes } from '../model/cliente';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente:clientes = new clientes ();
  datatable:any=[];
  displayedColumns: string[] = ['emp_cod', 'cli_cod', 'cli_nom', 'cli_est','ccl_cod'];
  constructor(

    private readonly _rutaDatos: ActivatedRoute,
    private _router:Router,
    private Cliente:clienteservice,
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
    this.Cliente

    .metodoGet(`https://localhost:44373/Cliente/Consultas?usuario=`+this.gvariables.g_empid.id.id)
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
      this.cliente.emp_cod=select.art_cod;
      this.cliente.cli_cod=select.art_est;
      this.cliente.cli_nom=select.art_nom;
      this.cliente.cli_est=select.art_prec;
      this.cliente.ccl_cod=select.car_cod;

      }

}
