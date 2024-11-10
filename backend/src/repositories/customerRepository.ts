import { Database } from 'sqlite';

import initDb from '../infra/database';
import { CustomerType } from '../types/Customer';
import { ICustomerRepository } from '../interfaces/ICustomerRepository';

export default class CustomerRepository implements ICustomerRepository {
  private db: Database | null = null;

  constructor() {
    this.initialize();
  }

  async initialize() {
    this.db = await initDb();
  }

  public async create(
    customer: CustomerType,
  ): Promise<CustomerType | undefined> {
    const query = {
      text: `INSERT INTO customers (name, email, cpf, phone, status) VALUES (?, ?, ?, ?, ?)`,
      values: [
        customer.name,
        customer.email,
        customer.cpf,
        customer.phone,
        customer.status,
      ],
    };

    if (!this.db) {
      throw new Error('Database not initialized');
    }

    const result = await this.db.run(query.text, query.values);

    if (result.lastID) {
      return await this.findById(result.lastID);
    } else {
      throw new Error('Customer not created');
    }
  }

  public async findById(id: number): Promise<CustomerType | undefined> {
    const query = {
      text: 'SELECT * FROM customers WHERE id = ?',
      values: [id],
    };

    if (!this.db) {
      throw new Error('Database not initialized');
    }

    return await this.db.get(query.text, query.values);
  }
}
