import { Request, Response, NextFunction } from 'express';

import CustomerService from '../services/customerService';

export default class CustomerController {
  private customerService: CustomerService;

  public constructor() {
    this.customerService = new CustomerService();
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const customer = req.body;
      const response = await this.customerService.create(customer);
      res.status(201).json({
        message: 'Customer created successfully',
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }

  public async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.customerService.findAll();
      res.status(200).json({
        message: 'Customers fetched successfully',
        data: response,
      });
    } catch (error) {
      next(error);
    }
  }
}
