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
  @Output() onContinuar = new EventEmitter();
  tzoffset: number; //offset in milliseconds
  dateLocalISOString: string;
  archivos: File[] = [];
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
      Validators.required
    ]),
    
  })
  checked = true;
  submitted = false;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.mostrandoFechaYHora = false;
    this.tzoffset = (new Date()).getTimezoneOffset() * 60000;
    this. dateLocalISOString = new Date(Date.now() - this.tzoffset).toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));

  }

  mostrarFechaYHora(valor: boolean){
    this.mostrandoFechaYHora = valor;
    if (!this.mostrandoFechaYHora){
      this.formDatosPedido.value.fechaYHora = "";
    }
      
  }

  continuar() : void{
    this.submitted = true;
    if(this.formDatosPedido.invalid){
      return;
    }
    this.onContinuar.emit();
  }

  async addFile(target: any){
    this.formDatosPedido.value.foto = target.files;
  }

  validarFecha():boolean{
    var fechaIngresada = document.getElementById("fechaHoraRecibo")?.nodeValue;
    return true;
  }
}
