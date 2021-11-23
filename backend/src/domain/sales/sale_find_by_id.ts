import { Inject, Injectable } from '@nestjs/common';
import { SaleProduct, SaleService } from './sale';
import { ISaleRepository } from './sale.repository';

const SaleRepo = () => Inject('SaleRepo');

@Injectable()
export class SaleFindByIdService {
  constructor(@SaleRepo() private readonly productRespository: ISaleRepository) {}

  public async findById(id: string): Promise<SaleProduct | SaleService> {
    return await this.productRespository.SaleFindById(id);
  }
}
