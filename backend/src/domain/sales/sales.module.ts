import { Module } from '@nestjs/common';

import { SaleCreateService } from './create_sale_product'
import { ScheduleCreateService } from './create_schedule_product'
import { SaleDestroyService } from './sale_delete'
import { SaleFindByIdService } from './sale_find_by_id'
import { SaleIndexService } from './sale_index'
import { SaleUpdateByIdService } from './sale_update'
import { ScheduleIndexService } from './schedule_index'
import { ScheduleUpdateByIdService } from './schedule_update'

import { SaleRepositoryModule } from '../../persistence/sales/sale_persistance.module';

@Module({
  imports: [ SaleRepositoryModule ],
  providers: [
    SaleCreateService,
    ScheduleCreateService,
    SaleDestroyService, 
    SaleFindByIdService, 
    SaleIndexService, 
    SaleUpdateByIdService, 
    ScheduleIndexService, 
    ScheduleUpdateByIdService
  ],
  exports: [
    SaleCreateService,
    ScheduleCreateService,
    SaleDestroyService, 
    SaleFindByIdService, 
    SaleIndexService, 
    SaleUpdateByIdService, 
    ScheduleIndexService, 
    ScheduleUpdateByIdService
  ],
})
export class SalesModule { }
