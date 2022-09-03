import { throwIfEmpty } from "rxjs";

export class DatosTarjeta{
    numeroTarjeta: number;
    nombreYApellidoTitular: string;
    mesYAnioVencimiento: string;
    cvc: number;

    constructor(nroTarjeta: number, nomYApellido: string
        , mes: number, anio: number, cvc: number){
            let mesNormalizado = mes.toString()

            if (mes < 10 && mes.toString().length < 2) {
               mesNormalizado = '0' + mes.toString()
            }

            let fechaVencimiento = mesNormalizado + "/" + anio

            this.numeroTarjeta = nroTarjeta;
            this.nombreYApellidoTitular = nomYApellido;
            this.mesYAnioVencimiento = fechaVencimiento;
            this.cvc = cvc;
    }

}