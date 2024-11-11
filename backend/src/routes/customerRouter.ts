import express from 'express';

import CustomerController from '../controllers/customerController';
import { validateFields } from '../middlewares/validateFields';

const router = express.Router();
const customerController = new CustomerController();

router.get('/customers', customerController.findAll.bind(customerController));
router.post(
  '/customers',
  validateFields,
  customerController.create.bind(customerController),
);
router.put(
  '/customers/:id',
  validateFields,
  customerController.update.bind(customerController),
);

export default router;
