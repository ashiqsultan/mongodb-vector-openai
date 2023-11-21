import { Request, Response, NextFunction } from 'express';
import AppResponse from '../types/AppResponse';
import searchProducts from '../services/product/searchProducts';

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const searchText: string = req.query['search'] as string;
    if (!searchText) {
      const response: AppResponse = {
        data: 'Search Text Required',
        isError: true,
        statusCode: 400,
      };
      res.status(400).send(response);
      return;
    }
    const products = await searchProducts(searchText);
    const result: AppResponse = {
      data: products,
      isError: false,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export { getProducts };
