import express from 'express';

import CustomerController from '../controllers/customerController';
import { validateFields } from '../middlewares/validateFields';
import { emailValidator } from '../middlewares/emailValidator';
import cpfValidator from '../middlewares/cpfValidator';
import { phoneValidator } from '../middlewares/phoneValidator';

const router = express.Router();
const customerController = new CustomerController();

router.get('/customers', customerController.findAll.bind(customerController));
router.get(
  '/customers/:id',
  customerController.findById.bind(customerController),
);
router.post(
  '/customers',
  validateFields,
  emailValidator,
  cpfValidator,
  phoneValidator,
  customerController.create.bind(customerController),
);
router.put(
  '/customers/:id',
  validateFields,
  emailValidator,
  cpfValidator,
  phoneValidator,
  customerController.update.bind(customerController),
);

export default router;
