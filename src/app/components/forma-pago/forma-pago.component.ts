import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { DatosTarjeta } from 'src/app/models/datos-tarjeta';
import { MontoRandom } from 'src/app/models/monto-randomizado';

// LÓGICA
import { FormaPago } from '../../models/forma-pago';
import { Pedido } from '../../models/pedido';

// DATOS
import { FormasPagos } from '../datos/datos-forma-pago'

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.css']
})
export class FormaPagoComponent implements OnInit {
  @Output() onContinuar = new EventEmitter();

  //datos precargados
  FormasPagos: FormaPago[];

  //datos pedido
  pedido: Pedido;
  formaPagoSeleccionado: FormaPago;
  efectivo: boolean;
  fecha: Date;
  
  //Formularios
  FormFormaPago: FormGroup;
  FormFormaPagoEfectivo: FormGroup;
  FormFormaPagoTarjeta: FormGroup;
  
  //no se para que es esto *chona*
  submitted = false;

  //monto de envio recibido
  @Input() monto: number;
  
 
  constructor(public formBuilder: FormBuilder) { 
    }

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
        Validators.pattern('[1-9][0-9]{0,7}'),
        Validators.min(this.monto)
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
    let monto = this.monto;
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
