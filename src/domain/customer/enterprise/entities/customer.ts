import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/uniqueEntityId'
import { Optional } from '@/core/types/optional'

interface CustomerProps {
  name: string
  email: string
  phone: string
  createdAt: Date
}

export class Customer extends Entity<CustomerProps> {
  static create(props: Optional<CustomerProps, 'createdAt'>,
  id?: UniqueEntityId,) {
    const customer = new Customer({
      ...props,
      createdAt: new Date()
    }, id)

    return customer
  }
}