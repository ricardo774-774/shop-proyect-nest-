import { Document } from "mongoose";

export interface Customer extends  Document {
    readonly name: string;             
    readonly lastname: string;
    readonly vip: boolean;
    readonly date: Date;
}