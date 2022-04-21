export type SaleService = {
  _id?: string;
  user_id: string;
  pet_id: string;
  product_id: string[];
  schedule?: Date;
  created_at?: Date;
  updated_at?: Date;
};

export type SaleProduct = {
  _id?: string;
  user_id: string;
  pet_id: string;
  product_id: string[];
  created_at?: Date;
  updated_at?: Date;
};

export type Sale = {
  _id?: string;
  user_id: string;
  pet_id: string;
  product_id: string[];
  schedule?: Date;
  created_at?: Date;
  updated_at?: Date;
}

export type SaleServiceIndex = {
  schedules: SaleService[];
  total_pages: number;
  current_page: number;
};

export type SaleProductIndex = {
  sales: SaleProduct[];
  total_pages: number;
  current_page: number;
};