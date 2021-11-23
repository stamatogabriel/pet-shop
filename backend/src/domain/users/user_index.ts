import { Inject, Injectable } from '@nestjs/common';
import { User } from './user';
import { IUserRepository } from './user.repository';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class UserIndexService {
  constructor(@UserRepo() private readonly userRepository: IUserRepository) {}

  public async index(): Promise<User[]> {
    return await this.userRepository.UserIndex();
  }
}
