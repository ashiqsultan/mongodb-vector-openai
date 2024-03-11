# MongoDB Vector Search with OpenAI API

Note: Atlas Cluster v7.0 is required for creating Vector Index programmatically. For versions below that,vector indexes can be created directly from the Atlas console.

# Project setup
1. Clone the repo
2. Create a .env file in the root directory of the project.
```
touch .env
```
3. Create two variables in your .env file: MONGODB_URI and OPENAI_API_KEY.
```
echo "MONGODB_URI=your_mongodb_uri" >> .env
echo "OPENAI_API_KEY=your_openai_api_key" >> .env
```
4. Install node modules.
```
npm install      # (or) yarn install
```
5. Run yarn run dev or npm run dev to start the server.
```
npm run dev    # (or) yarn run dev
```
If the MONGODB_URI is correct, it should connect without any error and start the server at port 5000. For the OpenAI API key, you need to create a new account.
