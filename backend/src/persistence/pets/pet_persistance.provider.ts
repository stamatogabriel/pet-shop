import { Provider } from '@nestjs/common';
import { PetRepository } from './pet.repository';

export const PetRepoProvider: Provider = {
  provide: 'PetRepo',
  useClass: PetRepository,
};
