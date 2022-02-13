import { User, UserIndex } from './user';
import { IQuery } from '../../common/interfaces/query';

export interface IUserRepository {
  UserIndex(query: IQuery): Promise<UserIndex>;
  UserCreate(createFields: User): Promise<User>;
  UserUpdateById(userId: string, updateFields: Partial<User>): Promise<User>;
  UserFindById(userId: string): Promise<User>;
  UserFindByEmail(email: string): Promise<User>;
  UserFindByToken(token: string): Promise<User>;
  UserDestroy(userId: string): Promise<unknown>;
}
