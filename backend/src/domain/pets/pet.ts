export type Pet = {
  _id?: string;
  name: string;
  age: string;
  tutor: string;
  created_at?: Date;
  updated_at?: Date;
};

export type PetIndex = {
  pets: Pet[];
  total_pages: number;
  current_page: number;
};