import { Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from './user.repository';

const UserRepo = () => Inject('UserRepo');

@Injectable()
export class UserDestroyService {
  constructor(@UserRepo() private readonly userRespository: IUserRepository) {}

  public async destroy(id: string): Promise<unknown> {
    return await this.userRespository.UserDestroy(id);
  }
}
