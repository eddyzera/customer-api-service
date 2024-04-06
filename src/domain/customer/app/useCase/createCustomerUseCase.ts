import { CustomerRepository } from '../repository/types/customerRepository'
import { Customer } from '@/domain/customer/enterprise/entities/customer'

interface CreateCustomerUseCaseRequest {
  email: string
  name: string
  phone: string
}

interface CreateCustomerUseCaseResponse {
  customer: Customer
}

export class CreateCustomerUseCase {
  constructor(private customerRepository: CustomerRepository) {}

  async execute({
    email,
    name,
    phone,
  }: CreateCustomerUseCaseRequest): Promise<CreateCustomerUseCaseResponse> {
    const customer = Customer.create({
      email,
      name,
      phone,
    })

    await this.customerRepository.create(customer)

    return {
      customer,
    }
  }
}
