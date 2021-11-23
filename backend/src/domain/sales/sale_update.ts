import { Inject, Injectable } from '@nestjs/common';
import { SaleProduct } from './sale';
import { ISaleRepository } from './sale.repository';

const SaleRepo = () => Inject('SaleRepo');

@Injectable()
export class SaleUpdateByIdService {
  constructor(@SaleRepo() private readonly saleRespository: ISaleRepository) {}

  public async updateById(id: string, sale: Partial<SaleProduct>): Promise<SaleProduct> {
    return await this.saleRespository.SaleUpdateById(id, sale);
  }
}
