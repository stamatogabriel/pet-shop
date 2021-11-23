import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PetSchema } from './pet.entity';
import { PetRepoProvider } from './pet_persistance.provider';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pet', schema: PetSchema }]),
  ],
  providers: [PetRepoProvider],
  exports: [PetRepoProvider],
})
export class PetRepositoryModule {}