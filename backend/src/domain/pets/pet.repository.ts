import { Pet, PetIndex } from './pet';
import { IQuery } from '../../common/interfaces/query';

export interface IPetRepository {
  PetIndex(query: IQuery): Promise<PetIndex>;
  PetCreate(createFields: Pet): Promise<Pet>;
  PetUpdateById(petId: string, updateFields: Partial<Pet>): Promise<Pet>;
  PetFindById(petId: string): Promise<Pet>;
  PetDestroy(petId: string): Promise<unknown>;
}
