import { ObjectId, Collection, Document } from 'mongodb';
import dbClient from '../dbClient';

export interface IProducts {
  name: string;
  category: string;
  description: string;
  price: number;
  embedding: number[];
}

export interface IProductDocument extends IProducts, Document {
  _id?: ObjectId;
}

const ProductCollection = async (): Promise<Collection<IProductDocument>> => {
  const mongoClient = await dbClient();
  const collection: Collection<IProductDocument> = mongoClient
    .db()
    .collection('products');
  return collection;
};

export default ProductCollection;
