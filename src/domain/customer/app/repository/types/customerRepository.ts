import { Customer } from '@/domain/customer/enterprise/entities/customer'

export interface CustomerRepository {
  create(customer: Customer): Promise<void>
  findById(id: string): Promise<Customer | null>
  update(customer: Customer): Promise<void>
  delete(customer: Customer): Promise<void>
}
