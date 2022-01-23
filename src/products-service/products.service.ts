import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateObjectDTO } from 'src/products/dto/create-product.dto';
import { updateProductDTO } from 'src/products/dto/update-product.dto';
import { Product,ProductDocument } from 'src/products/schemas_mongoose/product.schemas';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}
    private products=[]

    async    getAll():Promise<Product[]>{
        return this.productModel.find().exec()
 
    }

   async getOne(id:string):Promise<Product>{
        return this.productModel.findById(id)
    }

    create(createProductDTO:CreateObjectDTO):Promise<Product>{
        const newProduct= new this.productModel(createProductDTO)
        return newProduct.save()
    
    }

    async remove(id:string):Promise <Product>{
        return this.productModel.findByIdAndDelete(id)

    }

    async change(id:string,productDTO:updateProductDTO):Promise<Product>
    {
        return this.productModel.findByIdAndUpdate(id,productDTO,{new:true})
    }

}
