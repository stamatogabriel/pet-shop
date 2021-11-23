import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SaleSchema } from './sale.entity';
import { SaleRepoProvider } from './sale_persistance.provider';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sale', schema: SaleSchema }]),
  ],
  providers: [SaleRepoProvider],
  exports: [SaleRepoProvider],
})
export class SaleRepositoryModule {}