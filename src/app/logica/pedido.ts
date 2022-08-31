import { FormaPago  } from "./forma-pago";
import { DatosTarjeta } from "./datos-tarjeta";

export class Pedido{
    formaPago: FormaPago;
    datosTarjeta: DatosTarjeta;
    monto: number;
    montoAPagar: number

    constructor(formaPago: FormaPago, datosTarjeta: DatosTarjeta, monto: number, 
      montoAPagar: number) {
        
      this.formaPago = formaPago
      this.datosTarjeta = datosTarjeta;
      this.monto = monto;
      this.montoAPagar = montoAPagar;
    }

    public setFormaPago(fp: FormaPago): void{
      this.formaPago = fp;
    }

    public getFormaPago(): string{
      return this.formaPago.getNombre();
    }

    public setMonto(monto: number): void{
      if(monto > 0){
        this.monto = monto;
      }
    }

    public getMonto(): number{
      return this.monto;
    }
}