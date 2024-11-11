import { NextFunction, Request, Response } from 'express';
import { BadRequest } from '../utils/errors/AppError';

export const phoneValidator = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const phone = req.body.phone;
  // Accepts phone numbers in the following formats:
  // (11) 98765-4321
  // (11) 987654321
  // 11987654321
  const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

  if (!phoneRegex.test(phone)) {
    return next(new BadRequest('Invalid phone number'));
  }

  return next();
};
