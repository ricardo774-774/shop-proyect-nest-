import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [ProductModule, MongooseModule.forRoot('mongodb+srv://ricardo:factor123@cluster0.ydqhs.mongodb.net/?retryWrites=true&w=majority'), CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
