import { DatosPedido } from './../../models/datos-pedido';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.css']
})
export class DatosPedidoComponent implements OnInit {
  datosPedido: DatosPedido;
  mostrandoFechaYHora: boolean;
  hoy: Date;
  formDatosPedido = new FormGroup({
    descripcionPedido: new FormControl('', [
      Validators.required,
    ]),
    cuandoRecibe: new FormControl(),
    foto: new FormControl(null),
    fechaYHora: new FormControl(new Date())
    //fecha: new FormControl('', [
      //Validators.required,
      //Validators.pattern(
        //'(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[012])[-/](19|20)[0-9]{2}'
      //),
    //]),
    //hora: new FormControl(),
    
  })

  submitted = false;
  constructor() { }

  ngOnInit(): void {
    this.mostrandoFechaYHora = false;
    this.hoy = new Date();
    const input = document.getElementById('files');
    input?.addEventListener('change', event => {
      const target = event.target as HTMLInputElement;
      console.log(target.files);  
    }); 
  }
  mostrarFechaYHora(valor: boolean){
    this.mostrandoFechaYHora = valor;
    if (this.mostrandoFechaYHora){
      this.formDatosPedido.patchValue({
        fechaYHora: new Date()
      })
    }
      
  }

  continuar() : void{
    this.submitted = true;
    console.log("Acá se debería pasar a la parte de dirección retiro y envío..")
  }

  async addFile(target: any){
    this.formDatosPedido.value.foto = target.files[0];
  }
}
