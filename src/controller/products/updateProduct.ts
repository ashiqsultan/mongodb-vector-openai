import { Request, Response, NextFunction } from 'express';
import AppResponse from '../../types/AppResponse';
import updateOne from '../../services/product/updateOne';

const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productId = req.params.id;
    const reqBody = req.body;
    if (!productId || !reqBody || Object.keys(reqBody).length < 1) {
      const response: AppResponse = {
        data: 'ProductId and Request Body are required',
        isError: true,
        statusCode: 400,
      };
      res.status(400).send(response);
      return;
    }
    const product = await updateOne(productId, reqBody);
    const result: AppResponse = {
      data: product,
      isError: false,
    };
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export default updateProduct;
