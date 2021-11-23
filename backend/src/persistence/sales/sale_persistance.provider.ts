import { Provider } from '@nestjs/common';
import { SaleRepository } from './sale.repository';

export const SaleRepoProvider: Provider = {
  provide: 'SaleRepo',
  useClass: SaleRepository,
};
