import { Module } from '@nestjs/common';

import { DomainModule } from '../domain/domain.module';
import { AuthController } from './auth/auth.controller';
import { ProductController } from './products/product.controller';
import { UserController } from './users/user.controller';
import { PetController } from './pets/pet.controller';
import { SaleController } from './sales/sale.controller';

@Module({
  providers: [],
  controllers: [AuthController, UserController, ProductController, SaleController, PetController],
  imports: [DomainModule],
})
export class ApiModule { }
