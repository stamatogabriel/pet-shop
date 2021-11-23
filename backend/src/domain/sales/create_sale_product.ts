import { Inject, Injectable } from '@nestjs/common';
import { SaleProduct } from './sale';
import { ISaleRepository } from './sale.repository';

const SaleRepo = () => Inject('SaleRepo');

@Injectable()
export class SaleCreateService {
  constructor(@SaleRepo() private readonly saleRespository: ISaleRepository) {}

  public async createSale(sale: SaleProduct): Promise<SaleProduct> {
    return await this.saleRespository.SaleCreate(sale);
  }
}
