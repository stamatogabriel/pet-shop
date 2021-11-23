import { Module } from '@nestjs/common';

import { PetCreateService } from './pet_create';
import { PetDestroyService } from './pet_delete';
import { PetFindByIdService } from './pet_find_by_id';
import { PetIndexService } from './pet_index';
import { PetUpdateByIdService } from './pet_update';

import { PetRepositoryModule } from '../../persistence/pets/pet_persistance.module';

@Module({
  imports: [PetRepositoryModule],
  providers: [
    PetCreateService,
    PetDestroyService,
    PetFindByIdService,
    PetIndexService,
    PetUpdateByIdService,
  ],
  exports: [
    PetCreateService,
    PetDestroyService,
    PetFindByIdService,
    PetIndexService,
    PetUpdateByIdService,
  ],
})
export class PetModule {}
