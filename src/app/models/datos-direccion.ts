export class DatosDireccion{
  calleComercio: string;
  numeroComercio: string;
  ciudadComercio: String;
  calleEnvio: String;
  numeroEnvio: String;
  ciudadEnvio: String;
  costoEnvio: number;
  botonCostoEnvio: boolean;

  constructor(calleComercio: string,
              numeroComercio: string,
              ciudadComercio: String,
              calleEnvio: String,
              numeroEnvio: String,
              ciudadEnvio: String,
              costoEnvio: number,
              botonCostoEnvio: boolean){
    this.calleComercio = calleComercio;
    this.numeroComercio = numeroComercio;
    this.ciudadComercio = ciudadComercio;
    this.calleEnvio = calleEnvio;
    this.numeroEnvio = numeroEnvio;
    this.ciudadEnvio = ciudadEnvio;
    this.costoEnvio = costoEnvio;
    this.botonCostoEnvio = botonCostoEnvio;
  }
}