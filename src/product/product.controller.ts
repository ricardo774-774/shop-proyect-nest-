import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Get('/')
    async getAllProducts(@Res() res){
        const prodects = await this.productService.getAllProducts();
        return res.status(HttpStatus.OK).json({
            message: 'These are all products',
            prodects
        });
    }

    @Get('/:id')
    async getAProduct(@Res() res, @Param('id') id){
        const prodect = await this.productService.getAProduct(id);
        if(!prodect) throw new NotFoundException('This product does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'This is the product',
            prodect
        });
    }

    @Post('/create')
    async createProduct(@Res() res, @Body() createProductDto: CreateProductDto) {
        const product = await this.productService.createProduct(createProductDto);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfully Created',
            product
        });
    }

    @Put('/update/:id')
    async UpdateProduct(@Res() res, @Param('id') id, @Body() createProductDto: CreateProductDto){
        const product = await this.productService.updateProduct(id, createProductDto);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfully Updated',
            product
        });
    }

    @Delete('/delete/:id')
    async deleteProduct(@Res() res, @Param('id') id) {
        const product = await this.productService.deleteProduct(id);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfully Deleted',
            product
        });
    }
}
