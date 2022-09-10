import { Component, Input } from '@angular/core';
import { DatosDireccion } from './models/datos-direccion';
import { DatosPedido } from './models/datos-pedido';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US-PedidoLoQueSea';
  texto = 'hola';
  mostrarDatosPedido: boolean = true;
  mostrarDatosDireccion: boolean = false;
  mostrarDatosPago: boolean = false;


  //agregado chona
  datosDirecciones: DatosDireccion;
  datosPedido: DatosPedido;

  tomarDatosPedido(datos: DatosPedido){
    this.mostrarDatosPedido = false;
    this.mostrarDatosDireccion = true;
    this.mostrarDatosPago = false;
    this.datosPedido = datos;
  }

  tomarDatosDireccion(datos: DatosDireccion){
    this.mostrarDatosPedido = false;
    this.mostrarDatosDireccion = false;
    this.mostrarDatosPago = true;
    this.datosDirecciones = datos;
    console.log(datos);
  }

  tomarDatosPago(datos: Event){
    this.mostrarDatosPedido = true;
    this.mostrarDatosDireccion = true;
    this.mostrarDatosPago = true;
  }

  volviendoDirecciones(datos: Event){
    this.mostrarDatosPago = false;
    this.mostrarDatosDireccion = true;
  }

  volviendoPedido(datos: DatosPedido){
    this.mostrarDatosDireccion = false;
    this.mostrarDatosPedido = true;
    this.datosPedido = datos;
  }
}
