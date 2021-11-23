import { Inject, Injectable } from '@nestjs/common';
import { Product } from './product';
import { IProductRepository } from './product.repository';

const ProductRepo = () => Inject('ProductRepo');

@Injectable()
export class ProductFindByIdService {
  constructor(@ProductRepo() private readonly productRespository: IProductRepository) {}

  public async findById(id: string): Promise<Product> {
    return await this.productRespository.ProductFindById(id);
  }
}
