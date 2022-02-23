export enum Role {
  User = 'user',
  Admin = 'admin',
  Client = 'client',
}

interface Address {
  street: string;
  number: string;
  zipcode: string;
  neighborhood: string;
  city: string;
  state: string;
}

export type User = {
  _id?: string;
  avatar?: string;
  address?: Address[];
  name: string;
  roles: Role[];
  email: string;
  phone: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
  passwordResetToken?: string | null;
  passwordResetExpires?: Date | null;
};

export type UserIndex = {
  users: User[];
  total_pages: number;
  current_page: number;
};
