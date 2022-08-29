import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';
import { MapaComponent } from '../mapa/mapa.component';

@Component({
  selector: 'direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.css']
})
export class DireccionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  AbrirMapaComercio(){
    
  }
  AbrirMapaCasa(){
   
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
      Validators.maxLength(5),
      Validators.min(1),
    ]),
    ReferenciaComercio: new FormControl(''),
    CiudadEnvio: new FormControl(null),
    CalleEnvio: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    NumeroEnvio: new FormControl('', [
      Validators.required,
      Validators.maxLength(5),
      Validators.min(1),
    ]),
    ReferenciaEnvio: new FormControl(''),
  })

  Aceptar(){
    MapaComponent;
    this.submitted = true;
  }
}


