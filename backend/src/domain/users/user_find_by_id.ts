import { Inject, Injectable } from '@nestjs/common';
import { User } from './user';
import { IUserRepository } from './user.repository';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class UserFindByIdService {
  constructor(@UserRepo() private readonly userRespository: IUserRepository) {}

  public async findById(id: string): Promise<User> {
    return await this.userRespository.UserFindById(id);
  }
}
