export class Cliente {
  idCliente: number;
  nombresCliente: string;
  apellidosCliente: string;
  dni: string;
  numCelular?: string;
  dniDevuelto?: boolean;
  fechaRegistro: Date | string;
  fechaModificacion?: Date | string;
  direccion?: string;
  idEstadoCliente: number;
}

// export class Cliente {
//   idCliente: number;              // Integer
//   nombresCliente: string;
//   apellidosCliente: string;
//   dni: string;                    // UNIQUE
//   numCelular: string | null;
//   dniDevuelto: boolean | null;
//   fechaHoraRegistro: Date | string;
//   fechaHoraModificacion: Date | string;
//   direccion: string | null;
//   idEstadoCliente: number;        // FK - Short
// }
