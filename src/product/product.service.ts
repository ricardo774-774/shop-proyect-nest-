import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./interfaces/product.interface";
import { CreateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

    async getAllProducts(): Promise<Product[]> {
        const Products = await this.productModel.find(); //productModel es mi coneccion con mongodb 
        return Products;                 //utilizar productModel para cualquier peticion
    }

    async getAProduct(productID: string): Promise<Product>{
        const product = await this.productModel.findById(productID); 
        return product;
    }

    async createProduct(createProductDto: CreateProductDto): Promise<Product>{
        const product = new this.productModel(createProductDto); 
        return await product.save();
    }
    
    async updateProduct(productID: string, createProductDto: CreateProductDto): Promise<Product>{
        const upDate = await this.productModel.findByIdAndUpdate(productID, 
            createProductDto, { new: true });   //{ new: true } para que nos devuelva el objeto
        return upDate;                          //actualizado y no el anteriror 
    }

    async deleteProduct(productID: string): Promise<Product>{
        const deleteProduct = await this.productModel.findByIdAndDelete(productID);
        return deleteProduct;
    }
}
