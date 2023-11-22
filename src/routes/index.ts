import { Router } from 'express';
import { pong } from '../controller/ping';
import getProducts from '../controller/products/getProducts';
import updateProduct from '../controller/products/updateProduct';
import createProduct from '../controller/products/createProduct';

let routes = Router();

// Health check route. Returns 200
routes.get('/ping', pong);

// Products
routes.get('/product', getProducts);
routes.post('/product', createProduct);
routes.patch('/product/:id', updateProduct);

export default routes;
