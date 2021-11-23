import { User } from './user';

export interface IUserRepository {
  UserIndex(): Promise<User[]>;
  UserCreate(createFields: User): Promise<User>;
  UserUpdateById(userId: string, updateFields: Partial<User>): Promise<User>;
  UserFindById(userId: string): Promise<User>;
  UserFindByEmail(email: string): Promise<User>;
  UserFindByToken(token: string): Promise<User>;
  UserDestroy(userId: string): Promise<unknown>;
}
