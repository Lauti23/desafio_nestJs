import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ required: true, unique: true })
  name: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  stock: number;
  @Prop({ required: false })
  imageURL: string;
  @Prop({ required: false })
  description: string;
}

export const ProductModel = SchemaFactory.createForClass(Product);
