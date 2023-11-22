import { Request, Response, NextFunction } from 'express';
import AppResponse from '../../types/AppResponse';
import createOne from '../../services/product/createOne';

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, category, description, price } = req.body;
    if (!name || !category || !description || !price) {
      const response: AppResponse = {
        data: 'Some required fields are missing',
        isError: true,
        statusCode: 400,
      };
      res.status(400).send(response);
      return;
    }

    const product = await createOne({ name, category, description, price });
    const result: AppResponse = {
      data: product,
      isError: false,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default createProduct;
