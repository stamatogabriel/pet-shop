export interface IProduct {
  _id?: string;
  title: string;
  description: string;
  price: number;
  stock?: number;
  need_schedule: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
