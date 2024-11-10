import CustomerRepository from '../repositories/customerRepository';
import { CustomerType } from '../types/Customer';

export default class CustomerService {
  private customerRepository: CustomerRepository;

  public constructor() {
    this.customerRepository = new CustomerRepository();
  }

  public async create(customer: CustomerType) {
    return await this.customerRepository.create(customer);
  }

  public async findById(id: number) {
    return await this.customerRepository.findById(id);
  }

  public async findAll() {
    return await this.customerRepository.findAll();
  }
}
