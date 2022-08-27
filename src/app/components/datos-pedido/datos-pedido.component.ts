import { DatosPedido } from './../../models/datos-pedido';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.css']
})
export class DatosPedidoComponent implements OnInit {
  datosPedido: DatosPedido;
  mostrandoFechaYHora: boolean;
  hoy: Date;
  formDatosPedido = new FormGroup({
    descripcionPedido: new FormControl(),
    cuandoRecibe: new FormControl(),
    foto: new FormControl(),
    fechaYHora: new FormControl()
  })
  constructor() { }

  ngOnInit(): void {
    this.mostrandoFechaYHora = false;
    this.hoy = new Date();
  }

  mostrarFechaYHora(valor: boolean){
    this.mostrandoFechaYHora = valor;
    if (this.mostrandoFechaYHora){
      this.formDatosPedido.patchValue({
        fechaYHora: Date.now()
      })
    }
      
  }
}
