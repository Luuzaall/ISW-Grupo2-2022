import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MontoRandom } from 'src/app/models/monto-randomizado';

@Component({
  selector: 'direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {

  @Output() onContinuar = new EventEmitter<number>();
  calleComercio: string = "";
  numeroComercio: string = "";
  ciudadComercio: String ="";
  calleEnvio: String = "";
  numeroEnvio: String ="";
  ciudadEnvio: String ="";
  costoEnvio = MontoRandom.getValor();
  botonCostoEnvio = false;
  
  constructor() { }

  ngOnInit(): void {
    this.ciudadComercio = "Córdoba"
    this.ciudadEnvio = "Córdoba"
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
  Aceptar(){
    this.submitted = true;
    if(this.FormDirecciones.invalid){
      return;
    }
    this.onContinuar.emit(this.costoEnvio);
  }
}


