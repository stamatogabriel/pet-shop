import { Schema, Document } from 'mongoose';

import { Sale } from '../../domain/sales/sale';

export const SaleSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    pet_id: { type: Schema.Types.ObjectId, ref: 'Pet', required: true },
    product_id: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
    schedule: { type: Date, required: false },
  },
  {
    timestamps: true,
  }
);

export interface ISaleEntity extends Omit<Sale, '_id'>, Document {}