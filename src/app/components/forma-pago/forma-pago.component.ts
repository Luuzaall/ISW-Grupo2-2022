import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Pedido } from 'src/app/models/pedido';

import { FormaPago } from '../../models/forma-pago';

// DATOS
import { FormasPagos } from '../datos/datos-forma-pago'

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.css']
})
export class FormaPagoComponent implements OnInit {
  
  formaPagoSeleccionado: FormaPago;
  efectivo: boolean;
  FormasPagos: FormaPago[];
  FormFormaPago: FormGroup;
  FormFormaPagoEfectivo: FormGroup;
  FormFormaPagoTarjeta: FormGroup;
  pedido: Pedido;
  
  submitted = false;
 
  constructor(
    public formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.FormasPagos = FormasPagos
    this.crearControladorFormulario()

    this.efectivo = false;
    this.pedido = new Pedido();
  }

  crearControladorFormulario(){
    this.FormFormaPago = this.formBuilder.group({
      FormaPago: [null, [Validators.required]],
      MontoPagar: [null, [
        Validators.required,
        Validators.pattern('[1-9][0-9]{1,7}')
      ]],
      NumeroTarjeta: [null, [
        Validators.required,
        Validators.pattern(('[0-9]{1,16}')),
        Validators.minLength(11),
        Validators.min(999999999999999)
      ]],
      NombreTarjeta:[null, Validators.required],

      FechaVencimientoMes:[null,
        Validators.required,
        Validators.pattern(('(0?[1-9]|1[012])'))],
      
      FechaVencimientoAnio:[null,
        Validators.required,
        Validators.pattern(('^(20)\d{2}$'))],

      cvc:[null,[
        Validators.required,
        Validators.pattern(('[0-9]{3,3}'))
      ]]})
    this.FormFormaPagoEfectivo = this.formBuilder.group({})    
    this.FormFormaPagoTarjeta = this.formBuilder.group({})    
  }

  mostrandoEfectivo(resp: boolean): void{
    this.efectivo = resp;
  }

  seleccionandoFormaPago(fp: FormaPago): void{
    this.formaPagoSeleccionado = fp
  }

  mostrarPedido(): void{
    console.log(this.pedido)
  }

}
