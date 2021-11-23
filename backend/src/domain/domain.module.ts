import { Module } from '@nestjs/common';

import { UserModule } from './users/user.module';
import { ProductModule } from './products/product.module';
import { SalesModule } from './sales/sales.module';
import { PetModule } from './pets/pet.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule, ProductModule, SalesModule, PetModule],
  exports: [UserModule, AuthModule, ProductModule, SalesModule, PetModule],
})
export class DomainModule {}
