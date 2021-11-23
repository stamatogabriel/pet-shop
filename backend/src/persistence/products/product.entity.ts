import { Schema, Document } from 'mongoose';

import { Product } from '../../domain/products/product';

export const ProductSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number },
    need_schedule: { type: Boolean, default: false }
  },
  {
    timestamps: true,
  }
);

export interface IProductEntity extends Omit<Product, '_id'>, Document {}