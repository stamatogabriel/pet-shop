import { Inject, Injectable } from '@nestjs/common';
import { ISaleRepository } from './sale.repository';

const SaleRepo = () => Inject('SaleRepo');

@Injectable()
export class SaleDestroyService {
  constructor(@SaleRepo() private readonly saleRespository: ISaleRepository) {}

  public async destroy(id: string): Promise<unknown> {
    return await this.saleRespository.SaleDestroy(id);
  }
}
