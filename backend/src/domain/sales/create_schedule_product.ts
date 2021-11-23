import { HttpException, HttpStatus, Injectable, Inject } from '@nestjs/common';
import { SaleService } from './sale';
import { ISaleRepository } from './sale.repository';

const SaleRepo = () => Inject('SaleRepo');

@Injectable()
export class ScheduleCreateService {
  constructor(@SaleRepo() private readonly saleRespository: ISaleRepository) { }

  public async createSchedule(sale: SaleService): Promise<SaleService> {
    const now = new Date();
    const schedule = new Date(sale.schedule)

    if (now.getMilliseconds() > schedule.getMilliseconds()) throw new HttpException(
      {
        message: 'schedule has passed',
      },
      HttpStatus.BAD_REQUEST,
    );

    return await this.saleRespository.ScheduleCreate(sale);
  }
}
