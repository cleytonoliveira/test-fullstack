import express from 'express';

import CustomerController from '../controllers/customerController';
import { validateFields } from '../middlewares/validateFields';
import { emailValidator } from '../middlewares/emailValidator';
import cpfValidator from '../middlewares/cpfValidator';

const router = express.Router();
const customerController = new CustomerController();

router.get('/customers', customerController.findAll.bind(customerController));
router.post(
  '/customers',
  validateFields,
  emailValidator,
  cpfValidator,
  customerController.create.bind(customerController),
);
router.put(
  '/customers/:id',
  validateFields,
  emailValidator,
  cpfValidator,
  customerController.update.bind(customerController),
);

export default router;
