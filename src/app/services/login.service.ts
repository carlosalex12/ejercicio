import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Usuario } from '../model/usuario';
import{Observable}from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class loginService {

  constructor(private http:HttpClient) { }

  metodoGet(url: string, ) {
    return this.http.get(url);
  }

  metodoPost(url:string,datos:any) {
    return this.http.post(url, datos);
  }

  metodoPut(url: string, dataAEditar:any) {
    return this.http.put(url, dataAEditar);
  }

  metodoDelete(url: string) {
    return this.http.delete(url);
  }





}


