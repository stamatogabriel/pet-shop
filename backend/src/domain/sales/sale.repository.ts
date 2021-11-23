import { SaleProduct, SaleProductIndex, SaleService, SaleServiceIndex } from './sale';
import { IQuery } from '../../common/interfaces/query';

export interface ISaleRepository {
  ScheduleIndex(query: IQuery): Promise<SaleServiceIndex>;
  SalesIndex(query: IQuery): Promise<SaleProductIndex>
  ScheduleCreate(createFields: SaleService): Promise<SaleService>;
  SaleCreate(createFields: SaleProduct): Promise<SaleProduct>;
  ScheduleUpdateById(saleId: string, updateFields: Partial<SaleService>): Promise<SaleService>;
  SaleUpdateById(saleId: string, updateFields: Partial<SaleProduct>): Promise<SaleProduct>;
  SaleFindById(saleId: string): Promise<SaleProduct | SaleService>;
  SaleDestroy(saleId: string): Promise<unknown>;
}
