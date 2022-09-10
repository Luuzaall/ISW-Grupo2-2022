import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { faTemperatureEmpty } from '@fortawesome/free-solid-svg-icons';
import { DatosDireccion } from 'src/app/models/datos-direccion';
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
  @Output() onVolver = new EventEmitter();
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
  
  //Para ver si el usuario ya apretó el "Enviar"
  // Es decir, cuando apretó enviar, recién ahí verfica los datos incompletos.
  fechaVencimientoNOValida = true;
  submitted = false;

  //monto de envio recibido
  @Input() datosDireccion: DatosDireccion;
  monto: number;
 
  constructor(public formBuilder: FormBuilder) { 
    this.crearControladorFormulario()
  }

  ngOnInit(): void {
    this.FormasPagos = FormasPagos
    this.fecha = new Date();
    this.efectivo = false;
    this.monto = this.datosDireccion.costoEnvio;
    
  }

  crearControladorFormulario(){
    this.FormFormaPago = this.formBuilder.group({
      FormaPago: [null, [Validators.required]]
      })
    this.FormFormaPagoEfectivo = this.formBuilder.group({
      MontoPagar: [null, [
        Validators.required,
        Validators.pattern('[0-9][0-9]{0,7}'),
        Validators.min(this.monto)
      ]],
    })    

    this.FormFormaPagoTarjeta = this.formBuilder.group({
      numeroTarjeta: [null, [
        Validators.required,
        Validators.pattern(('5[1-5][0-9]{14}')),
        // Validators.pattern(('[0-9]{1,16}')),
        Validators.minLength(11),
        Validators.min(999999999999999)
      ]],
      nombreYApellidoTitular: [null, 
        Validators.required],

      FechaVencimientoMes:[null, [
        Validators.required,
        Validators.pattern(('^(([1-9])|(1[012]))$'))]],
      
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

  validarMesAnio(): void {
    const fechaYHoraActual = new Date();
    let mesActual = fechaYHoraActual.getMonth()
    let anioActual = fechaYHoraActual.getFullYear()

    let anioIngresado = this.FormFormaPagoTarjeta.get('FechaVencimientoAnio')?.value 
    let mesIngresado = this.FormFormaPagoTarjeta.get('FechaVencimientoMes')?.value 

    if (mesIngresado <= mesActual && anioActual == anioIngresado) {
      this.fechaVencimientoNOValida = true;
    }
    else {
      this.fechaVencimientoNOValida = false
    }

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

  volver(){
    this.onVolver.emit();
  }
}
