import { Component } from '@angular/core';

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


  tomarDatosPedido(datos: Event){
    this.mostrarDatosPedido = false;
    this.mostrarDatosDireccion = true;
    this.mostrarDatosPago = false;
  }

  tomarDatosDireccion(datos: Event){
    this.mostrarDatosPedido = false;
    this.mostrarDatosDireccion = false;
    this.mostrarDatosPago = true;
  }

  tomarDatosPago(datos: Event){
    this.mostrarDatosPedido = true;
    this.mostrarDatosDireccion = true;
    this.mostrarDatosPago = true;
  }
}
