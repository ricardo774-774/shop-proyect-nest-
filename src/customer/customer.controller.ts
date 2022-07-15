import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/customer.dto';
import { CustomerService } from "./customer.service";

@Controller('customer')
export class CustomerController {

    constructor(private customerService: CustomerService){}

    @Get('/')
    async getAllCustomers(@Res() res){
        const customers = await this.customerService.getAllCustomers();
        return res.status(HttpStatus.OK).json({
            message: 'These are all customers',
            customers
        });
    }

    @Get('/:id')
    async getACustomer(@Res() res, @Param('id') id){
        const customer = await this.customerService.getACustomer(id);
        if(!customer) throw new NotFoundException('This customer does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'This is the customer',
            customer
        });
    }

    @Post('/create')
    async createCustomer(@Res() res, @Body() createCustomerDto: CreateCustomerDto) {
        const customer = await this.customerService.createCustomer(createCustomerDto);
        return res.status(HttpStatus.OK).json({
            message: 'Customer Successfully Created',
            customer
        });
    }

    @Put('/update/:id')
    async updateCustomer(@Res() res, @Param('id') id, @Body() createCustomerDto: CreateCustomerDto){
        const customer = await this.customerService.updateCustomer(id, createCustomerDto);
        return res.status(HttpStatus.OK).json({
            message: 'Customer Successfully Updated',
            customer
        });
    }

    @Delete('/delete/:id')
    async deleteCustomer(@Res() res, @Param('id') id) {
        const customer = await this.customerService.deleteCustomer(id);
        return res.status(HttpStatus.OK).json({
            message: 'Customer Successfully Deleted',
            customer
        });
    }

}
