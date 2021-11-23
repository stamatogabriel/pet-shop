import { Inject, Injectable } from '@nestjs/common';
import { SaleProductIndex } from './sale';
import { ISaleRepository } from './sale.repository';

import { IQuery } from '../../common/interfaces/query';

const SaleRepo = () => Inject('SaleRepo');

@Injectable()
export class SaleIndexService {
  constructor(@SaleRepo() private readonly saleRepository: ISaleRepository) {}

  public async indexSale(query: IQuery): Promise<SaleProductIndex> {
    return await this.saleRepository.SalesIndex(query);
  }
}
