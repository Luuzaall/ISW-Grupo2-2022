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
  calleComercio: string = "";
  numeroComercio: string = "";
  ciudadComercio: String ="";
  calleEnvio: String = "";
  numeroEnvio: String ="";
  ciudadEnvio: String ="";
  costoEnvio = MontoRandom.getValor();
  botonCostoEnvio = false;
  referenciaComercio: String = "";
  referenciaEnvio: String = "";

  //agregado chona
  @Input() datos: DatosDireccion;
  
  constructor() { }

  ngOnInit(): void {
    this.ciudadComercio = "Córdoba"
    this.ciudadEnvio = "Córdoba"
    if(typeof(this.datos) !== undefined){
      this.calleComercio = this.datos.calleComercio;
      this.numeroComercio = this.datos.numeroComercio;
      this.ciudadComercio = this.datos.ciudadComercio;
      this.calleEnvio = this.datos.calleEnvio;
      this.numeroEnvio = this.datos.numeroEnvio;
      this.ciudadEnvio = this.datos.ciudadEnvio;
      this.costoEnvio = this.datos.costoEnvio;
      this.botonCostoEnvio = this.datos.botonCostoEnvio;
      this.referenciaComercio = this.datos.referenciaComercio;
      this.referenciaEnvio = this.datos.referenciaEnvio;
    }
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
    this.numeroComercio = event.target.value;
    
  }
  onTextboxCalleComercio(event: any){
    this.calleComercio = event.target.value;
    
  }
  onTextboxCalleEnvio(event: any){
    this.calleEnvio = event.target.value;
    
  }
  onTextboxAlturaEnvio(event: any){
    this.numeroEnvio = event.target.value;
    console.log(this.numeroEnvio);
    console.log(this.numeroComercio);
    console.log(this.calleComercio);
    console.log(this.calleEnvio);
  }
  onTextboxInput(){
    if(this.calleComercio.length > 0 && 
      this.numeroComercio.length > 0 &&
      this.calleEnvio.length > 0 && 
      this.numeroEnvio.length > 0 )
  {
    this.botonCostoEnvio = true;
  }
  }

  onTextboxReferenciaComercio(event: any){
    this.referenciaComercio = event.target.value;
  }

  onTextboxReferenciaEnvio(event: any){
    this.referenciaEnvio = event.target.value;
  }
  Continuar(){
    this.submitted = true;
    if(this.FormDirecciones.invalid){
      return;
    }
    this.datos = new DatosDireccion(
                                    this.calleComercio, 
                                    this.numeroComercio,
                                    this.ciudadComercio,
                                    this.calleEnvio,
                                    this.numeroEnvio,
                                    this.ciudadEnvio, 
                                    this.costoEnvio,
                                    this.botonCostoEnvio,
                                    this.referenciaComercio,
                                    this.referenciaEnvio);
    this.onContinuar.emit(this.datos);
  }

  Volver(){
    this.onVolver.emit()
  }
}


