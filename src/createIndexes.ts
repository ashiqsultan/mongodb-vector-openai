import ProductCollection from './models/products';
import { MongoClient } from 'mongodb';

const vectorIndex = {
  name: 'mynewvectorindex',
  definition: {
    mappings: {
      dynamic: true,
      fields: {
        embedding: {
          type: 'knnVector',
          dimensions: 1536, // OpenAI Embedding size
          similarity: 'euclidean',
        },
      },
    },
  },
};

const indexProductCollection = async (dbClient: MongoClient) => {
  try {
    await dbClient.db().createCollection('products');
    const productCollection = await ProductCollection();
    const createVectorIndex = await productCollection.createSearchIndex(
      vectorIndex
    );
    console.log(createVectorIndex);
    console.log('Index created for ProductCollection');
  } catch (error) {
    console.log('Error creating index for ProductCollection');
    console.error(error);
  }
};

const createAllIndexes = async (dbClient: MongoClient) => {
  await indexProductCollection(dbClient);
};

export default createAllIndexes;
