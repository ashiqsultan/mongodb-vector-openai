import { MongoClient } from 'mongodb';
import { VECTOR_INDEX_NAME, PRODUCT_COLLECTION_NAME } from './constants';

const vectorIndex = {
  name: VECTOR_INDEX_NAME,
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
    const productCollection = await dbClient
      .db()
      .createCollection(PRODUCT_COLLECTION_NAME);
    // Only available when used against a 7.0+ Atlas cluster.
    await productCollection.createSearchIndex(vectorIndex);
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
