export class BoletaVenta {
  idBoletaVenta: number;          
  idVenta: number;                
  nombresCliente: string;
  apellidosCliente: string;
  nombreMetodoPago: string;
  numBoleta: string;          
  total: number;     
  fechaHoraEmision: Date | string;
  estaActiva: boolean;
}