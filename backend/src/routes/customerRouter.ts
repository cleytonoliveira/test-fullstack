import express from 'express';

import CustomerController from '../controllers/customerController';

const router = express.Router();
const customerController = new CustomerController();

router.post('/customers', customerController.create.bind(customerController));

export default router;
