import { Inject, Injectable } from '@nestjs/common';
import { UserIndex } from './user';
import { IUserRepository } from './user.repository';
import { IQuery } from '../../common/interfaces/query';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class UserIndexService {
  constructor(@UserRepo() private readonly userRepository: IUserRepository) {}

  public async index(query: IQuery): Promise<UserIndex> {
    return await this.userRepository.UserIndex(query);
  }
}
