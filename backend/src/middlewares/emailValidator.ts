import { NextFunction, Request, Response } from 'express';
import * as EmailValidator from 'email-validator';

import { BadRequest } from '../utils/errors/AppError';

export const emailValidator = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const isValidEmail = EmailValidator.validate(req.body.email);
  if (!isValidEmail) {
    return next(new BadRequest('Invalid email format'));
  }
  return next();
};
