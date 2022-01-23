import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsService } from "src/products-service/products.service";
import { ProductsController } from "./products.controller";
import { Product, ProductSchema } from "./schemas_mongoose/product.schemas";

@Module({
    providers:[ProductsService],
    controllers:[ProductsController],
    ///подключение
    imports:[MongooseModule.forFeature([{
        name:Product.name,schema:ProductSchema
    }])]})

export class ProductModule{

}