import ProductCollection, { IProductDocument } from '../../models/products';
import generateEmbedding from '../../utils/openai/generateEmbedding';
import { VECTOR_INDEX_NAME } from '../../constants';
import searchAssistant from '../../utils/openai/searchAssistant';

interface IGptResponse {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
}

/**
 * Constructs the Match Stage required for Aggregate pipeline based on GPT response
 */
const constructMatch = (gptRes: IGptResponse): Record<string, any> => {
  const matchStage: Record<string, any> = { $match: {} };
  const gptCategory = gptRes.category;
  const gptMinPrice = gptRes.minPrice;
  const gptMaxPrice = gptRes.maxPrice;
  if (gptCategory) {
    matchStage.$match = { category: gptCategory };
  }
  if (typeof gptMinPrice === 'number' || typeof gptMaxPrice === 'number') {
    const priceMatch: Record<string, any> = {};
    if (typeof gptMinPrice === 'number') {
      priceMatch.$gte = gptMinPrice;
    }
    if (typeof gptMaxPrice === 'number') {
      priceMatch.$lte = gptMaxPrice;
    }
    matchStage.$match.price = priceMatch;
  }
  return matchStage;
};

const searchProducts = async (
  searchText: string
): Promise<IProductDocument[]> => {
  try {
    const embedding = await generateEmbedding(searchText); // Generate Embedding
    const gptResponse = (await searchAssistant(searchText)) as IGptResponse;
    console.log('gptResponse', gptResponse);
    const matchStage = constructMatch(gptResponse);
    console.log('matchStage', matchStage);
    const collection = await ProductCollection();
    // Query DB
    const aggCursor = collection.aggregate<IProductDocument>([
      {
        $vectorSearch: {
          index: VECTOR_INDEX_NAME,
          path: 'embedding',
          queryVector: embedding,
          numCandidates: 150,
          limit: 10,
        },
      },
      matchStage,
      {
        $project: {
          _id: 1,
          name: 1,
          category: 1,
          description: 1,
          price: 1,
          score: { $meta: 'vectorSearchScore' },
        },
      },
    ]);
    const products: IProductDocument[] = [];
    for await (const doc of aggCursor) {
      products.push(doc);
    }
    return products;
  } catch (error) {
    throw error;
  }
};

export default searchProducts;
