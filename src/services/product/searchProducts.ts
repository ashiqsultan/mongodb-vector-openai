import { IProductDocument } from '../../models/products';
import generateEmbedding from '../../utils/openai/generateEmbedding';

const searchProducts = async (
  searchText: string
): Promise<IProductDocument[]> => {
  // Generate Embedding
  const embedding = await generateEmbedding(searchText);
  // Query DB
  // Return Result
  return [];
};

export default searchProducts;
