import { Router } from 'express';
import { pong } from '../controller/ping';
import getProducts from '../controller/products/getProducts';
import updateProduct from '../controller/products/updateProduct';

let routes = Router();

// Health check route. Returns 200
routes.get('/ping', pong);

// Products
routes.get('/product', getProducts);
routes.patch('/product/:id', updateProduct);

export default routes;
