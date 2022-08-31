import { DatosPedido } from './../../models/datos-pedido';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    descripcionPedido: new FormControl('', [
      Validators.required,
    ]),
    cuandoRecibe: new FormControl(),
    foto: new FormControl(),
    fechaYHora: new FormControl(),
    //fecha: new FormControl('', [
      //Validators.required,
      //Validators.pattern(
        //'(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}'
      //),
    //]),
    //hora: new FormControl(),
    
  })

  submitted = false;
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

  continuar() : void{
    this.submitted = true;
    console.log("Acá se debería pasar a la parte de dirección retiro y envío..")
  }
}
