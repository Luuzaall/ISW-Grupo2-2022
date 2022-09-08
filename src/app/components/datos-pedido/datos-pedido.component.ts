import { DatosPedido } from './../../models/datos-pedido';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MimeTypes } from 'src/app/common/mime-types';

@Component({
  selector: 'datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.css']
})
export class DatosPedidoComponent implements OnInit {
  datosPedido: DatosPedido;
  fechaMenorActual: boolean = false;
  mostrandoFechaYHora: boolean;
  tamanioMaxFoto: number = 5242880; //5MB
  @Output() onContinuar = new EventEmitter();
  tzoffset: number; //offset in milliseconds
  validFileType = MimeTypes;
  dateLocalISOString: string;
  archivos: File[] = [];
  hoy: Date;
  formDatosPedido = new FormGroup({
    descripcionPedido: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
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
    this.dateLocalISOString = new Date(Date.now() - this.tzoffset).toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));
    this.hoy = new Date();
  }

  mostrarFechaYHora(valor: boolean){
    this.fechaMenorActual = false;
    this.mostrandoFechaYHora = valor;
    // if (!this.mostrandoFechaYHora){
    //   this.formDatosPedido.value.fechaYHora = this.dateLocalISOString;
    // }
  }

  continuar() : void{
    this.submitted = true;
    if(this.formDatosPedido.invalid || this.fechaMenorActual){
      return;
    }
    this.onContinuar.emit();
  }

  async addFile(target: any){
    const archivoIngresado: File = target.files[0] as File;
    if (!this.validFileType.includes(archivoIngresado.type))
    alert('No se puede ingresar un archivo que no tenga el formato jpg');
    else if (archivoIngresado.size > this.tamanioMaxFoto)
    alert('El tamaño de la foto no puede superar los ' + (this.tamanioMaxFoto / 1048576) + 'MB.')
    else
    this.formDatosPedido.value.foto = target.files[0] as File;
  }
  
    validarFecha(target: any){
      const fechaIngresada: Date = new Date(target.value);
      if (fechaIngresada < this.hoy)
        this.fechaMenorActual = true;
      else
        this.fechaMenorActual = false;
}


}
