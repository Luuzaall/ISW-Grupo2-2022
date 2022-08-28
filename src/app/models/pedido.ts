export class Pedido{
    formaPago: number;
    monto: number;
    nro_tarjeta: number;
    nombre_tarjeta: string;

    mes_vencimiento: number;
    anio_vencimiento: number;
    cvc: number;

    constructor() {
      this.monto = 0;
    }

    public setFormaPago(fp: number): void{
      this.formaPago = fp;
    }

    public getFormaPago(): number{
      return this.formaPago;
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