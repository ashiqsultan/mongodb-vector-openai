import products from './products';
import { IProductDocument } from '../models/products';
import createOne from '../services/product/createOne';

const seedProducts = async () => {
  try {
    const createPromises: Promise<IProductDocument>[] = [];
    for (let product of products) {
      createPromises.push(createOne(product));
    }
    await Promise.all(createPromises);
    console.log('Product seeding completed');
  } catch (error) {
    console.error(error);
  }
};

export default seedProducts;
