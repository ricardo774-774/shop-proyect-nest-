import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Customer } from "./interfaces/customer.interface";
import { CreateCustomerDto } from "./dto/customer.dto";

@Injectable()
export class CustomerService {

    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>){}

    async getAllCustomers(): Promise<Customer[]> {
        const Customers = await this.customerModel.find(); //productModel es mi coneccion con mongodb 
        return Customers;                 //utilizar productModel para cualquier peticion
    }

    async getACustomer(customerID: string): Promise<Customer>{
        const Customer = await this.customerModel.findById(customerID); 
        return Customer;
    }

    async createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customer>{
        const customer = new this.customerModel(createCustomerDto); 
        return await customer.save();
    }
    
    async updateCustomer(customerID: string, createCustomerDto: CreateCustomerDto): Promise<Customer>{
        const upDateProduct = await this.customerModel.findByIdAndUpdate(customerID, 
            createCustomerDto, { new: true });   //{ new: true } para que nos devuelva el objeto
        return upDateProduct;                          //actualizado y no el anteriror 
    }

    async deleteCustomer(customerID: string): Promise<Customer>{
        const deleteCustomer = await this.customerModel.findByIdAndDelete(customerID);
        return deleteCustomer;
    }
}

