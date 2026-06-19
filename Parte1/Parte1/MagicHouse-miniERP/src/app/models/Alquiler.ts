export class Alquiler {
  idAlquiler: number;             
  idCliente: number;              
  idUsuario: number;             
  idMetodoPago: number;           
  fechaAlquiler: Date | string;   
  fechaPactada: Date | string;    
  fechaEntrega: Date | string | null;  
  total: number;                  
  estaActivo: boolean;
}