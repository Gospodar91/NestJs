import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, Post, Put, Redirect,Header } from '@nestjs/common';
import { ProductsService } from 'src/products-service/products.service';
import { CreateObjectDTO } from './dto/create-product.dto';
import { updateProductDTO } from './dto/update-product.dto';
import { Product } from './schemas_mongoose/product.schemas';

@Controller('products')
export class ProductsController {
    // подключаем в контроллере сервис через конструктор 
    constructor( private readonly productService:ProductsService){

    }

    ///Методы контроллера-декораторы 
    //Методы класса принимают декораторы в качестве параметров 
    // 
@Get()
// @Redirect("https://docs.nestjs.com/",301)
//Редирект 1 параметр урла,второй статус код 
getAll():Promise<Product[]>{
    return this.productService.getAll()
}

@Get(":id")
getOne(@Param("id") id:string):Promise<Product>
{
    return this.productService.getOne(id)
 

}
@Post()
@HttpCode(HttpStatus.CREATED)
//статус код запроса
@Header("Cache-control","none")
//хедеры 
create(@Body() createProductDTO: CreateObjectDTO):Promise<Product>{
    //DTO Data Create Object
    console.log('createProductDTO', createProductDTO);

    return this.productService.create(createProductDTO)

}

@Delete(":id")

remove(@Param("id") id:string):Promise <Product>{
    return this.productService.remove(id)

}

@Put(":id")
change(@Body() updateProductDTO:updateProductDTO,@Param("id") id:string):Promise <Product>{
    return this.productService.change(id,updateProductDTO)
    
    


}

}
