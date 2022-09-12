import { DatosPedido } from './../../models/datos-pedido';
import { ApplicationRef, Component, EventEmitter, Input, NgZone, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MimeTypes } from 'src/app/common/mime-types';

@Component({
  selector: 'datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.css']
})
export class DatosPedidoComponent implements OnInit, OnChanges {
  @Input() datosPedido: DatosPedido;
  fechaMenorActual: boolean = false;
  mostrandoFechaYHora: boolean = false;
  tamanioMaxFoto: number = 5242880; //5MB
  @Output() onContinuar = new EventEmitter<DatosPedido>();
  tzoffset: number; //time offsetin  milliseconds
  validFileType = MimeTypes;
  dateLocalISOString: string;
  archivos: File[] = [];
  hoy: Date;
  loAntesPosible: boolean = false;

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
  ngOnChanges(changes: SimpleChanges): void {
    this.inicializarDatos(changes);
  }

  ngOnInit(): void {
    this.mostrandoFechaYHora = false;
    this.tzoffset = (new Date()).getTimezoneOffset() * 60000;
    this.dateLocalISOString = new Date(Date.now() - this.tzoffset).toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));
    this.hoy = new Date();
    if (!this.datosPedido)
      this.datosPedido = new DatosPedido();
    else {
      if(this.datosPedido.fechaYHora && this.datosPedido.fechaYHora == this.dateLocalISOString){
        this.loAntesPosible = true;
        this.mostrandoFechaYHora = false;
      }
      else{
        this.loAntesPosible = false;
        this.mostrandoFechaYHora = true;
      }
    }
  }

  inicializarDatos(changes: any){
    if(this.datosPedido){
      this.formDatosPedido.patchValue(this.datosPedido);
    }
  }

  

  mostrarFechaYHora(valor: boolean){
    this.fechaMenorActual = false;
    this.mostrandoFechaYHora = valor;
  }

  continuar() : void{
    this.submitted = true;
    if(this.formDatosPedido.invalid || this.fechaMenorActual){
      return;
    };

    if (this.formDatosPedido.controls['foto'].value)
      this.datosPedido.foto = this.formDatosPedido.controls['foto'].value;
    if (this.formDatosPedido.controls['descripcionPedido'].value)
      this.datosPedido.descripcionPedido = this.formDatosPedido.controls['descripcionPedido'].value as string;
    if (this.formDatosPedido.controls['fechaYHora'].value)
      this.datosPedido.fechaYHora = this.formDatosPedido.controls['fechaYHora'].value as string;
    this.onContinuar.emit(this.datosPedido);
  }

  async addFile(target: any){
    const archivoIngresado: File = target.files[0] as File;
    if (!this.validFileType.includes(archivoIngresado.type))
      alert('No se puede ingresar un archivo que no tenga el formato jpg');
    else if (archivoIngresado.size > this.tamanioMaxFoto)
      alert('El tamaño de la foto no puede superar los ' + (this.tamanioMaxFoto / 1048576) + 'MB.')
    else{
      const file: File = target.files[0] as File;
      this.formDatosPedido.controls['foto'].setValue(file, {onlySelf: true});
    }
  }
  
    validarFecha(target: any){
      const fechaIngresada: Date = new Date(target.value);
      if (fechaIngresada < this.hoy)
        this.fechaMenorActual = true;
      else
        this.fechaMenorActual = false;
}


}
