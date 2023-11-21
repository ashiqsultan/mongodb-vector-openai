import { Router } from 'express';
import { pong } from '../controller/ping';
import { getProducts } from '../controller/product';

let routes = Router();

// Health check route. Returns 200
routes.get('/ping', pong);

// Products
routes.get('/product', getProducts);

export default routes;
