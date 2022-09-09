import { Component, Input } from '@angular/core';

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

  montoRecibido: number;

  tomarDatosPedido(datos: Event){
    this.mostrarDatosPedido = false;
    this.mostrarDatosDireccion = true;
    this.mostrarDatosPago = false;
  }

  tomarDatosDireccion(datos: number){
    this.mostrarDatosPedido = false;
    this.mostrarDatosDireccion = false;
    this.mostrarDatosPago = true;
    this.montoRecibido = datos;
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
}
