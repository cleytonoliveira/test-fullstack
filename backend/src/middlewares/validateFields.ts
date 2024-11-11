import { NextFunction, Request, Response } from 'express';
import { BadRequest } from '../utils/errors/AppError';

export const validateFields = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const { name, email, cpf, phone, status } = req.body;

  if (!name || !email || !cpf || !phone || !status) {
    next(new BadRequest('All fields must be filled'));
  }
  next();
};
