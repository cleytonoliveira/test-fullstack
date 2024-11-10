import { CustomerType } from '../types/Customer';

export interface ICustomerRepository {
  create(customer: CustomerType): Promise<CustomerType | undefined>;
  findById(id: number): Promise<CustomerType | undefined>;
}
