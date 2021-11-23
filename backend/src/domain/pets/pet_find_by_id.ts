import { Inject, Injectable } from '@nestjs/common';
import { Pet } from './pet';
import { IPetRepository } from './pet.repository';

const PetRepo = () => Inject('PetRepo');

@Injectable()
export class PetFindByIdService {
  constructor(@PetRepo() private readonly petRespository: IPetRepository) {}

  public async findById(id: string): Promise<Pet> {
    return await this.petRespository.PetFindById(id);
  }
}
