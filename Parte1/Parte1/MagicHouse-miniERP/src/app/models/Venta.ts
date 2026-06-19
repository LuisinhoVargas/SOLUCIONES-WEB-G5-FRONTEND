export class Venta {
  idVenta: number;               
  idCliente: number;             
  idUsuario: number;              
  idMetodoPago: number;          
  total: number;                
  fechaHoraVenta: Date | string;
  estaActiva: boolean;
}
