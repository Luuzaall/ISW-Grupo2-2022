import { Component, OnInit } from '@angular/core';
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

}
