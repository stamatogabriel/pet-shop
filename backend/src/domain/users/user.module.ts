import { Module } from '@nestjs/common';

import { UserCreateService } from './user_create';
import { UserDestroyService } from './user_delete';
import { UserFindByEmailService } from './user_find_by_email';
import { UserFindByIdService } from './user_find_by_id';
import { UserFindByTokenService } from './user_find_by_token';
import { UserIndexService } from './user_index';
import { UpdateByIdService } from './user_update';

import { UserRepositoryModule } from '../../persistence/users/user_persistance.module';

@Module({
  imports: [UserRepositoryModule],
  providers: [
    UserCreateService,
    UserDestroyService,
    UserFindByEmailService,
    UserFindByIdService,
    UserFindByTokenService,
    UserIndexService,
    UpdateByIdService,
  ],
  exports: [
    UserCreateService,
    UserDestroyService,
    UserFindByEmailService,
    UserFindByIdService,
    UserFindByTokenService,
    UserIndexService,
    UpdateByIdService,
  ],
})
export class UserModule {}
