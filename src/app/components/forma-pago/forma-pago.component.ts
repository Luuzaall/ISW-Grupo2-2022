import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

import { FormaPago } from '../../models/forma-pago';

// DATOS
import { FormasPagos } from '../datos/datos-forma-pago'

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.css']
})
export class FormaPagoComponent implements OnInit {
  
  formaPago: number;
  efectivo: boolean;
  FormasPagos: FormaPago[];
  FormFormaPago: FormGroup;
  FormFormaPagoEfectivo: FormGroup;
  FormFormaPagoTarjeta: FormGroup;

  submitted = false;
 
  constructor(
    public formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.FormasPagos = FormasPagos
    this.crearControladorFormulario()

    this.efectivo = false;
    this.formaPago = 0;
  }

  crearControladorFormulario(){
    this.FormFormaPago = this.formBuilder.group({
      FormaPago: [null, [Validators.required]],
      MontoPagar: [null, [
        Validators.required,
        Validators.pattern('[1-9][0-9]{1,7}')
      ]]
        })
    this.FormFormaPagoEfectivo = this.formBuilder.group({})    
    this.FormFormaPagoTarjeta = this.formBuilder.group({})    
  }

  mostrandoEfectivo(resp: boolean): void{
    this.efectivo = resp;
  }

  seleccionandoFormaPago(resp: number): void{
    this.formaPago = resp;
  }

}
