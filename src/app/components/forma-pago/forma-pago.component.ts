import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { DatosTarjeta } from 'src/app/logica/datos-tarjeta';

// LÓGICA
import { FormaPago } from '../../logica/forma-pago';
import { Pedido } from '../../logica/pedido';

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
  monto = 0;
  fecha: Date;
 
  constructor(
    public formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.FormasPagos = FormasPagos
    this.crearControladorFormulario()
    this.fecha = new Date();
    this.efectivo = false;
  }

  crearControladorFormulario(){
    this.FormFormaPago = this.formBuilder.group({
      FormaPago: [null, [Validators.required]]
      })
    this.FormFormaPagoEfectivo = this.formBuilder.group({
      MontoPagar: [null, [
        Validators.required,
        Validators.pattern('[1-9][0-9]{1,7}')
      ]],
    })    

    this.FormFormaPagoTarjeta = this.formBuilder.group({
      numeroTarjeta: [null, [
        Validators.required,
        Validators.pattern(('[0-9]{1,16}')),
        Validators.minLength(11),
        Validators.min(999999999999999)
      ]],
      nombreYApellidoTitular: [null, 
        Validators.required],

      FechaVencimientoMes:[null, [
        Validators.required,
        Validators.pattern(('([0][1-9])|([1][012])'))]],
      
      FechaVencimientoAnio:[null, [
        Validators.required,
        Validators.pattern('([2][0][2][2-9])|([2][0][3-9][0-9])'),
      ]],

      cvc:[null,[
        Validators.required,
        Validators.pattern(('[0-9]{3,3}'))
      ]]
    })    
  }

  mostrandoEfectivo(resp: boolean): void{
    this.efectivo = resp;
  }

  seleccionandoFormaPago(fp: FormaPago): void{
    this.formaPagoSeleccionado = fp
  }

  finalizarPedido() {
    let monto = 0
    let montoAPagar = null;
    let datosTarjetaNuevo: DatosTarjeta = null as any

    if (this.formaPagoSeleccionado.sosEfectivo()){
      montoAPagar = this.FormFormaPagoEfectivo.get('MontoPagar')?.value 
    }
    else {
      let datosTarjeta = this.obtenerDatosTarjeta();
      datosTarjetaNuevo = new DatosTarjeta(datosTarjeta[0], datosTarjeta[1], datosTarjeta[2],
        datosTarjeta[3], datosTarjeta[4])
    }
    
    let pedidoNuevo = new Pedido(this.formaPagoSeleccionado, datosTarjetaNuevo, monto, 
      montoAPagar)
    console.log(pedidoNuevo)
  }

  obtenerDatosTarjeta(): any{
    let numeroTarjeta = this.FormFormaPagoTarjeta.get('numeroTarjeta')?.value 
    let nombreYApe = this.FormFormaPagoTarjeta.get('nombreYApellidoTitular')?.value 
    let fechaVencimientoMes =  this.FormFormaPagoTarjeta.get('FechaVencimientoMes')?.value
    let fechaVencimientoAnio =  this.FormFormaPagoTarjeta.get('FechaVencimientoAnio')?.value
    let cvc = this.FormFormaPagoTarjeta.get('cvc')?.value

    return [numeroTarjeta, nombreYApe, fechaVencimientoMes, fechaVencimientoAnio, cvc]
  }

  mostrarPedido(): void{
    console.log(this.pedido)
  }

}
