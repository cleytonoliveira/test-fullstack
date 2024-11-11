import express from 'express';

import CustomerController from '../controllers/customerController';

const router = express.Router();
const customerController = new CustomerController();

router.get('/customers', customerController.findAll.bind(customerController));
router.post('/customers', customerController.create.bind(customerController));
router.put(
  '/customers/:id',
  customerController.update.bind(customerController),
);

export default router;
