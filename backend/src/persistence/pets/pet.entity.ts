import { Schema, Document } from 'mongoose';

import { Pet } from '../../domain/pets/pet';

export const PetSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: { type: String, required: true },
    age: { type: String, required: true },
    tutor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);

export interface IPetEntity extends Omit<Pet, '_id'>, Document {}