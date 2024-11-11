import validator from 'cpf-cnpj-validator';
import { NextFunction, Request, Response } from 'express';
import BaseJoi from 'joi';
import { BadRequest } from '../utils/errors/AppError';

const Joi = BaseJoi.extend(validator);

const cpfSchema = Joi.document().cpf();

export default function cpfValidator(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const { error } = cpfSchema.validate(req.body.cpf);

  if (error) {
    return next(new BadRequest('Invalid CPF'));
  }

  return next();
}
