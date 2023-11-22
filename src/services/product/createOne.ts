import ProductCollection, {
  IProductDocument,
  IProducts,
} from '../../models/products';
import generateEmbedding from '../../utils/openai/generateEmbedding';

export default async function createOne(
  product: IProducts
): Promise<IProductDocument> {
  try {
    const collection = await ProductCollection();
    const toEmbed = {
      name: product.name,
      category: product.category,
      description: product.description,
    };
    const embedding = await generateEmbedding(JSON.stringify(toEmbed));
    const newDoc = await collection.insertOne({ ...product, embedding });
    const result = await collection.findOne({ _id: newDoc.insertedId });
    return result;
  } catch (error) {
    throw error;
  }
}
