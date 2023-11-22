import products from './products';
import generateEmbedding from '../utils/openai/generateEmbedding';
import { IProductDocument } from '../models/products';
import createOne from '../services/product/createOne';

const seedProducts = async () => {
  try {
    const createPromises: Promise<IProductDocument>[] = [];
    for (let product of products) {
      const toEmbed = {
        name: product.name,
        category: product.category,
        description: product.description,
      };
      const embedding = await generateEmbedding(JSON.stringify(toEmbed));
      createPromises.push(createOne({ ...product, embedding }));
    }
    await Promise.all(createPromises);
    console.log('Product seeding completed');
  } catch (error) {
    console.error(error);
  }
};

export default seedProducts;
