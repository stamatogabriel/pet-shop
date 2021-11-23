import { Inject, Injectable } from '@nestjs/common';
import { SaleService } from './sale';
import { ISaleRepository } from './sale.repository';

const SaleRepo = () => Inject('SaleRepo');

@Injectable()
export class ScheduleUpdateByIdService {
  constructor(@SaleRepo() private readonly saleRespository: ISaleRepository) {}

  public async updateById(id: string, sale: Partial<SaleService>): Promise<SaleService> {
    return await this.saleRespository.ScheduleUpdateById(id, sale);
  }
}
