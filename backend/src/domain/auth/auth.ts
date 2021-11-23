import { User } from '../users/user';

export type Auth = {
  user: User;
  access_token: string;
};
