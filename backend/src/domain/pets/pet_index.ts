import { Inject, Injectable } from '@nestjs/common';
import { PetIndex } from './pet';
import { IPetRepository } from './pet.repository';

import { IQuery } from '../../common/interfaces/query';

const PetRepo = () => Inject('PetRepo');

@Injectable()
export class PetIndexService {
  constructor(@PetRepo() private readonly petRepository: IPetRepository) {}

  public async index(query: IQuery): Promise<PetIndex> {
    return await this.petRepository.PetIndex(query);
  }
}
