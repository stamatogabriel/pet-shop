import { Inject, Injectable } from '@nestjs/common';
import { Pet } from './pet';
import { IPetRepository } from './pet.repository';

const PetRepo = () => Inject('PetRepo');

@Injectable()
export class PetCreateService {
  constructor(@PetRepo() private readonly petRespository: IPetRepository) {}

  public async create(pet: Pet): Promise<Pet> {
    return await this.petRespository.PetCreate(pet);
  }
}
