import { Schema } from "mongoose";

export const ProductSchema = new Schema({                  //en este punto se recomienda ejecutar el comando: npm i @types/mongoose -D
    name: String,             //solo para facilitar el autocompletado
    imageURL: String,         //los String con con mayuscula porque son desde mongoose
    description: String,
    availability: Boolean,
    price: Number,
    date: {
        type: Date,                   
        default: Date.now     //para generar en automatico la fecha 
    }
})