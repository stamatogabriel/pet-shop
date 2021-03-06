import { Inject, Injectable } from '@nestjs/common';
import { User } from './user';
import { IUserRepository } from './user.repository';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class UserFindByEmailService {
  constructor(@UserRepo() private readonly userRespository: IUserRepository) {}

  public async findByEmail(email: string): Promise<User> {
    return await this.userRespository.UserFindByEmail(email);
  }
}
