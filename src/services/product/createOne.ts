import ProductCollection, {
  IProductDocument,
  IProducts,
} from '../../models/products';

export default async function createOne(
  product: IProducts
): Promise<IProductDocument> {
  try {
    const collection = await ProductCollection();
    const newDoc = await collection.insertOne(product);
    const result = await collection.findOne({ _id: newDoc.insertedId });
    return result;
  } catch (error) {
    throw error;
  }
}
