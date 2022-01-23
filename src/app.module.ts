import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products-service/products.service';
import { ProductModule } from './products/products.module';


///Модуль собирает свой контролер и провайдер 
//Контроллер отвечает за вид метода и hedears\return\status etc
//Провайдер -это сервис  с логикой
//Подключаем к контроллеру сервис в конструкторе 
//DTO-описание интерфейса  Data Transfer Object подключается в контроллере 
@Module({
  imports: [ProductModule,
    MongooseModule.
    forRoot("mongodb+srv://root_dev:GorgonY19@cluster0.06lvp.mongodb.net/products?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {}
