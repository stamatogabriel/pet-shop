import { IUser } from "./user";

export type IPet = {
  _id?: string;
  name: string;
  age: string;
  tutor: IUser;
  created_at?: Date;
  updated_at?: Date;
};

export type IPetRequest = {
  _id?: string;
  name: string;
  age: string;
  tutor: string;
  created_at?: Date;
  updated_at?: Date;
};