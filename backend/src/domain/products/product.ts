export type Product = {
  _id?: string;
  title: string;
  description: string;
  price: number;
  stock?: number;
  need_schedule: boolean;
  created_at?: Date;
  updated_at?: Date;
};

export type ProductIndex = {
  products: Product[];
  total_pages: number;
  current_page: number;
};