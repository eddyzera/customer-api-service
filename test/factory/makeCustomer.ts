import { faker } from '@faker-js/faker'

import { UniqueEntityId } from '@/core/entities/uniqueEntityId'
import { CustomerProps, Customer } from '@/domain/customer/enterprise/entities/customer'

export const makeCustomer = (override: Partial<CustomerProps> = {}, id?: UniqueEntityId) => {
  const customer = Customer.create(
    {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      phone: faker.phone.number(),
      ...override,
    },
    id
  )

  return customer
}