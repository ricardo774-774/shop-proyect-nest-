import { Schema } from "mongoose";

export const CustomerSchema = new Schema({  //en este punto se recomienda ejecutar el comando: npm i @types/mongoose -D
    name: String,             //solo para facilitar el autocompletado
    lastname: String,         //los String con con mayuscula porque son desde mongoose
    vip: String,
    date: {
        type: Date,                   
        default: Date.now     //para generar en automatico la fecha 
    }
})
