import { Direccion } from "./Direccion";
import { Producto } from "./Producto";

export class Tienda{
    nombre!:string;
    direccion!:Direccion;
    productos!:Producto[];
}