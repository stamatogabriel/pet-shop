import { Inject, Injectable } from '@nestjs/common';
import { IPetRepository } from './pet.repository';

const PetRepo = () => Inject('PetRepo');

@Injectable()
export class PetDestroyService {
  constructor(@PetRepo() private readonly petRespository: IPetRepository) {}

  public async destroy(id: string): Promise<unknown> {
    return await this.petRespository.PetDestroy(id);
  }
}
