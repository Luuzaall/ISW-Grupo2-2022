import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatosDireccion } from 'src/app/models/datos-direccion';
import { MontoRandom } from 'src/app/models/monto-randomizado';

@Component({
  selector: 'direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {

  @Output() onContinuar = new EventEmitter<DatosDireccion>();
  @Output() onVolver = new EventEmitter();
  costoEnvio = MontoRandom.getValor();
  mostrarCostoEnvio: boolean;

  //agregado chona
  @Input() datos: DatosDireccion;
  
  constructor() { }

  ngOnInit(): void {
    if(!this.datos){
      this.datos = new DatosDireccion();
      this.datos.ciudadComercio = "Córdoba"
      this.datos.ciudadEnvio = "Córdoba"
      this.datos.numeroComercio = "";
      this.datos.calleEnvio = "";
      this.datos.numeroEnvio = "";
      this.datos.referenciaComercio = "";
      this.datos.referenciaEnvio = "";
      this.datos.costoEnvio = 0;
      this.mostrarCostoEnvio = false;
    }
    else {
      this.mostrarCostoEnvio = true;
    }
  }
  AbrirMapaComercio(){
    this.datos.calleComercio = "Jose Antonio de Goyechea";
    this.datos.numeroComercio = "2851";
    this.datos.ciudadComercio = "Córdoba";
  }
  AbrirMapaCasa(){
    this.datos.calleEnvio = "José Américo Orzali";
    this.datos.numeroEnvio = "7122";
    this.datos.ciudadEnvio = "Córdoba";
  }

  submitted = false;

  FormDirecciones = new FormGroup({
    CiudadComercio: new FormControl(null),
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
    costoEnvio: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]{1,5}"),
      Validators.min(1),
    ]),
  })
  onTextboxAlturaComercio(event: any){
    this.datos.numeroComercio = event.target.value;
    
  }
  onTextboxCalleComercio(event: any){
    this.datos.calleComercio = event.target.value;
    
  }
  onTextboxCalleEnvio(event: any){
    this.datos.calleEnvio = event.target.value;
    
  }
  onTextboxAlturaEnvio(event: any){
    this.datos.numeroEnvio = event.target.value;
  }
  onTextboxInput(){
    if(this.datos.calleComercio.length > 0 && 
      this.datos.numeroComercio.length > 0 &&
      this.datos.calleEnvio.length > 0 && 
      this.datos.numeroEnvio.length > 0 )
    {
      this.datos.costoEnvio = this.costoEnvio;
      this.mostrarCostoEnvio = true;
    }
  }

  onTextboxReferenciaComercio(event: any){
    this.datos.referenciaComercio = event.target.value;
  }

  onTextboxReferenciaEnvio(event: any){
    this.datos.referenciaEnvio = event.target.value;
  }
  Continuar(){
    this.submitted = true;
    if(this.FormDirecciones.invalid){
      return;
    }
    this.onContinuar.emit(this.datos);
  }

  Volver(){
    this.onVolver.emit(this.datos)
  }
}


