import { Inject, Injectable } from '@nestjs/common';
import { SaleServiceIndex } from './sale';
import { ISaleRepository } from './sale.repository';

import { IQuery } from '../../common/interfaces/query';

const SaleRepo = () => Inject('SaleRepo');

@Injectable()
export class ScheduleIndexService {
  constructor(@SaleRepo() private readonly saleRepository: ISaleRepository) {}

  public async indexSchedule(query: IQuery): Promise<SaleServiceIndex> {
    return await this.saleRepository.ScheduleIndex(query);
  }
}
