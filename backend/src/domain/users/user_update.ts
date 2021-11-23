import { Inject, Injectable } from '@nestjs/common';
import { User } from './user';
import { IUserRepository } from './user.repository';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class UpdateByIdService {
  constructor(@UserRepo() private readonly userRespository: IUserRepository) {}

  public async updateById(id: string, user: Partial<User>): Promise<User> {
    return await this.userRespository.UserUpdateById(id, user);
  }
}
