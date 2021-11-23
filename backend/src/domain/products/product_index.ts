import { Inject, Injectable } from '@nestjs/common';
import { ProductIndex } from './product';
import { IProductRepository } from './product.repository';

import { IQuery } from '../../common/interfaces/query';

const ProductRepo = () => Inject('ProductRepo');

@Injectable()
export class ProductIndexService {
  constructor(@ProductRepo() private readonly productRepository: IProductRepository) {}

  public async index(query: IQuery): Promise<ProductIndex> {
    return await this.productRepository.ProductIndex(query);
  }
}
