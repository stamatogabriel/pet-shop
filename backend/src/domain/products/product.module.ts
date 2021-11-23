import { Module } from '@nestjs/common';

import { ProductCreateService } from './product_create';
import { ProductDestroyService } from './product_delete';
import { ProductFindByIdService } from './product_find_by_id';
import { ProductIndexService } from './product_index';
import { ProductUpdateByIdService } from './product_update';

import { ProductRepositoryModule } from '../../persistence/products/product_persistance.module';

@Module({
  imports: [ProductRepositoryModule],
  providers: [
    ProductCreateService,
    ProductDestroyService,
    ProductFindByIdService,
    ProductIndexService,
    ProductUpdateByIdService,
  ],
  exports: [
    ProductCreateService,
    ProductDestroyService,
    ProductFindByIdService,
    ProductIndexService,
    ProductUpdateByIdService,
  ],
})
export class ProductModule {}
