import { ObjectId } from 'mongodb';
import ProductCollection, {
  IProductDocument,
  IProducts,
} from '../../models/products';

export default async function updateOne(
  id: string,
  data: Partial<IProducts>
): Promise<IProductDocument> {
  try {
    const collection = await ProductCollection();
    const _id = new ObjectId(id);
    const { name, category, description, price } = data;
    const updateObj: Partial<IProducts> = {};

    if (name) updateObj.name = name;
    if (category) updateObj.category = category;
    if (description) updateObj.description = description;
    if (price) updateObj.price = price;

    const updatedDoc = await collection.findOneAndUpdate(
      { _id },
      { $set: updateObj },
      {
        returnDocument: 'after',
        projection: { embedding: 0 },
      }
    );
    if (!updatedDoc) {
      throw new Error('Document not found');
    }
    return updatedDoc;
  } catch (error) {
    throw error;
  }
}
