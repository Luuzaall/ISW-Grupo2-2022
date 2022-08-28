export class FormaPago {
    Nombre: string;

    public constructor(nombre: string){
        this.Nombre = nombre
    }

    public sosEfectivo(){
        if (this.Nombre == "Efectivo") {
            return true;
        }
        return false;
    }

    public sosTarjeta(){
        if (this.Nombre == "Tarjeta Crédito / Débito") {
            return true;
        }
        return false;
    }

}
