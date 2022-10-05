import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

import{Observable}from 'rxjs'
import { articulo } from '../model/articulo';
@Injectable({
  providedIn: 'root'
})
export class facturaservices {

  constructor(private http:HttpClient) { }
  urlpost:string='https://localhost:44373/Articulo/InsertarArticulo?user=';

  metodoGet(url: string, ) {
    return this.http.get(url);
  }
  metodoPost(url:string,datos:any) {
    return this.http.post(url,datos);
  }
  addUsuario(articulo:articulo):Observable<articulo>{
  return this.http.post<articulo>(this.urlpost,articulo);
}

  metodoPut(url: string, dataAEditar:any) {
    return this.http.put(url, dataAEditar);
  }

  metodoDelete(url: string) {
    return this.http.delete(url);
  }





}


