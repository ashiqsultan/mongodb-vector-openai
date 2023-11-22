import 'dotenv/config';
// import dbClient from '../dbClient';
// import createAllIndexes from '../createIndexes';
import seedProducts from './seedProducts';

const startSeeding = async () => {
  console.log('Seeding Started');
  // const db = await dbClient();
  // await createAllIndexes(db);
  await seedProducts();
  console.log('Seeding Completed');
};

startSeeding();
