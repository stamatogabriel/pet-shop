import { Auth } from './auth';
import { User } from '../users/user';

export interface IAuthRepository {
  ValidateUser(email: string, password: string): Promise<User>;
  Login(user: User): Promise<Auth>;
  ForgotPass(email: string): Promise<unknown>;
  RedefinePass(token: string, password: string): Promise<unknown>;
}
