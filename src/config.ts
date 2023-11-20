interface IConfig {
  port: string;
  mongoDBUri: string;
  corsOptions: any;
}

const config: IConfig = {
  port: process.env.PORT || '5000',
  mongoDBUri: process.env.MONGODB_URI || '',
  corsOptions: { origin: '*' },
};

export default config;
