import { Router } from 'express';
import { pong } from '../controller/ping';

let routes = Router();

// Health check route. Returns 200
routes.get('/ping', pong);

export default routes;
