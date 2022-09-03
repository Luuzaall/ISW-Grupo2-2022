import { DatosPedido } from './../../models/datos-pedido';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.css']
})
export class DatosPedidoComponent implements OnInit {
  datosPedido: DatosPedido;
  mostrandoFechaYHora: boolean;
  @Input() hola: string;
  @Output() onContinuar = new EventEmitter();
  hoy = new Date().getTime();
  formDatosPedido = new FormGroup({
    descripcionPedido: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
    ]),
    cuandoRecibe: new FormControl('',[
      Validators.required
  ]),
    foto: new FormControl(),
    fechaYHora: new FormControl('',[
      Validators.min(this.hoy)
    ]),
    
  })

  
  checked = true;
  submitted = false;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.mostrandoFechaYHora = false;
    

  }

  mostrarFechaYHora(valor: boolean){
    this.mostrandoFechaYHora = valor;
    if (this.mostrandoFechaYHora){
      this.formDatosPedido.patchValue({
        // fechaYHora: new Date()
      })
    }
      
  }

  continuar() : void{
    this.submitted = true;
    if(this.formDatosPedido.invalid){
      return;
    }
    this.onContinuar.emit("hola");
  }

  async addFile(target: any){
    this.formDatosPedido.value.foto = target.files[0];
  }

  validarFecha():boolean{
    var fechaIngresada = document.getElementById("fechaHoraRecibo")?.nodeValue;
    return true;
  }
}
