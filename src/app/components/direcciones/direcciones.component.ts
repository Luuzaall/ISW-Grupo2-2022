import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {

  @Output() onContinuar = new EventEmitter();
  calleComercio: string = "";
  numeroComercio: string = "";
  ciudadComercio: String ="";
  calleEnvio: String = "";
  numeroEnvio: String ="";
  ciudadEnvio: String ="";
  constructor() { }

  ngOnInit(): void {
    
  }
  AbrirMapaComercio(){
    this.calleComercio = "Jose Antonio de Goyechea";
    this.numeroComercio = "2851";
    this.ciudadComercio = "Córdoba";
  }
  AbrirMapaCasa(){
    this.calleEnvio = "José Américo Orzali";
    this.numeroEnvio = "7122";
    this.ciudadEnvio = "Córdoba";
  }

  submitted = false;

  FormDirecciones = new FormGroup({
    CiudadComercio: new FormControl(null, [
      Validators.required,
    ]),
    CalleComercio: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    NumeroComercio: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]{1,5}"),
      Validators.min(1),
    ]),
    ReferenciaComercio: new FormControl(''),
    CiudadEnvio: new FormControl(null, [

    ]),
    CalleEnvio: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    NumeroEnvio: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]{1,5}"),
      Validators.min(1),
    ]),
    ReferenciaEnvio: new FormControl(''),
  })

  Aceptar(){
    this.submitted = true;
    this.onContinuar.emit();
  }
}


