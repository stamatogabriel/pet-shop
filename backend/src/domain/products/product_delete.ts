import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from './product.repository';

const ProductRepo = () => Inject('ProductRepo');

@Injectable()
export class ProductDestroyService {
  constructor(@ProductRepo() private readonly productRespository: IProductRepository) {}

  public async destroy(id: string): Promise<unknown> {
    return await this.productRespository.ProductDestroy(id);
  }
}
