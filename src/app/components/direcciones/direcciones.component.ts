import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';


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
    let img = new Image();
    img.src="E:\ISW-Proyecto\ISW-Grupo2-2022\src\assets\imagenes\google-maps.svg";
    
  }
  AbrirMapaCasa(){
    window.open();
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
    ]),
    ReferenciaEnvio: new FormControl(''),
  })

  Aceptar(){
    this.submitted = true;
  }
}


