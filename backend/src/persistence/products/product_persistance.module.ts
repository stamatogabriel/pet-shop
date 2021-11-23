import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductSchema } from './product.entity';
import { ProductRepoProvider } from './product_persistance.provider';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  providers: [ProductRepoProvider],
  exports: [ProductRepoProvider],
})
export class ProductRepositoryModule {}