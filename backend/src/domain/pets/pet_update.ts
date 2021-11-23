import { Inject, Injectable } from '@nestjs/common';
import { Pet } from './pet';
import { IPetRepository } from './pet.repository';

const PetRepo = () => Inject('PetRepo');

@Injectable()
export class PetUpdateByIdService {
  constructor(@PetRepo() private readonly petRespository: IPetRepository) {}

  public async updateById(id: string, pet: Partial<Pet>): Promise<Pet> {
    return await this.petRespository.PetUpdateById(id, pet);
  }
}
