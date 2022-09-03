export interface DatosPedido {
    descripcionPedido: string;
    cuandoRecibe: OpcionRecibirPedido;
    foto?: File;
    fechaYHora: Date;
}

enum OpcionRecibirPedido{
    LoAntesPosible,
    FechaHora
}
