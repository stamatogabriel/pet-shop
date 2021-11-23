import { Inject, Injectable } from '@nestjs/common';
import { Product } from './product';
import { IProductRepository } from './product.repository';

const ProductRepo = () => Inject('ProductRepo');

@Injectable()
export class ProductUpdateByIdService {
  constructor(@ProductRepo() private readonly productRespository: IProductRepository) {}

  public async updateById(id: string, product: Partial<Product>): Promise<Product> {
    return await this.productRespository.ProductUpdateById(id, product);
  }
}
