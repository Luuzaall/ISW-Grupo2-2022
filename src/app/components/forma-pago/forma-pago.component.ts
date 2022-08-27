import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.css']
})
export class FormaPagoComponent implements OnInit {
  
  formaPago: number;
  efectivo: boolean;


  FormFormaPago: FormGroup = new FormGroup({

  });
 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.efectivo = false;
    this.formaPago = 0;
  }

  crearFormulario(){
    this.FormFormaPago = this.fb.group({
    
    })
  }

  mostrandoEfectivo(resp: boolean): void{
    this.efectivo = resp;
  }

  seleccionandoFormaPago(resp: number): void{
    this.formaPago = resp;
  }

}
