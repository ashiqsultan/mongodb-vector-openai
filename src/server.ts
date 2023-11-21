import 'dotenv/config';
import app from './app';
import http from 'http';
import dbClient from './dbClient';
import createAllIndexes from './createIndexes';
import seed from './seed/seed';

const server = http.createServer(app);

/**
 * Start Express server.
 */
server.listen(app.get('port'), async () => {
  try {
    const db = await dbClient();
    // await createAllIndexes(db);
    // await seed();
    // Server start logs
    console.log('Server started');
    console.log(`Port: ${app.get('port')}`);
    console.log(`Environment: ${app.get('env')}`);
  } catch (error) {
    console.error(error);
  }
});

export default server;
