import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './users/user_persistance.module';
import { ProductRepositoryModule } from './products/product_persistance.module';
import { PetRepositoryModule } from './pets/pet_persistance.module';
import { AuthRepositoryModule } from './auth/auth_repository.module';

@Module({
  imports: [UserRepositoryModule, AuthRepositoryModule, ProductRepositoryModule, PetRepositoryModule],
  exports: [UserRepositoryModule, AuthRepositoryModule, ProductRepositoryModule, PetRepositoryModule],
})
export class PersistenceModule {}
