import mongoose, { Schema, model, models } from 'mongoose';

export interface IProduct {
  _id?: string;
  name: string;
  category: string;
  price: string;
  unit: string;
  description: string;
  image: string;
  tag: string;
  featured: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: String, required: true },
    unit: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    tag: { type: String, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Product = models.Product || model<IProduct>('Product', ProductSchema);
