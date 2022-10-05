import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './menu/login/login.component';
import { HomeComponent } from './menu/home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { MaterialModule } from './NgMaterial/material/material.module';
import { tablaComponent } from './Usuario/tabla.component';
import { NavbarComponent } from './menu/navbar/navbar.component';
import { FooterComponent } from './menu/footer/footer.component';
//importar HttpClientModule
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ArticuloComponent } from './articulo/articulo.component';
import { FacturaComponent } from './factura/factura.component';
import { ClienteComponent } from './cliente/cliente.component';
import { MenuModule } from './menu/menu.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NoEncontradoComponent,
    tablaComponent,
    NavbarComponent,
    FooterComponent,
    ArticuloComponent,
    FacturaComponent,
    ClienteComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
MenuModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
