import 'dotenv/config';
import dbClient from '../dbClient';
import seedProducts from './seedProducts';
// import createAllIndexes from '../createIndexes';

const startSeeding = async () => {
  console.log('Seeding Started');
  const db = await dbClient();
  // await createAllIndexes(db);
  await seedProducts();
  db.close();
  console.log('Seeding Completed');
};

startSeeding();
