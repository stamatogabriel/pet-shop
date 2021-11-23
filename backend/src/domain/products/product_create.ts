import { Inject, Injectable } from '@nestjs/common';
import { Product } from './product';
import { IProductRepository } from './product.repository';

const ProductRepo = () => Inject('ProductRepo');

@Injectable()
export class ProductCreateService {
  constructor(@ProductRepo() private readonly productRespository: IProductRepository) {}

  public async create(product: Product): Promise<Product> {
    return await this.productRespository.ProductCreate(product);
  }
}
