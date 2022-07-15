//para detallar lo que se maneja dentro del codigo
import { Document } from "mongoose";

export interface Product extends  Document {
    readonly name: string;             
    readonly imageURL: string;         
    readonly description: string;
    readonly availability: boolean;
    readonly price: number;
    readonly date: Date;
}
