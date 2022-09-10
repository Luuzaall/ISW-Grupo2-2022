export class DatosPedido {
    constructor(){
        
    }
    descripcionPedido: string;
    cuandoRecibe: OpcionRecibirPedido;
    foto?: File;
    fechaYHora: string;
}

enum OpcionRecibirPedido{
    LoAntesPosible,
    FechaHora
}
