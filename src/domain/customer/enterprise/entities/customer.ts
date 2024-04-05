import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/uniqueEntityId'
import { Optional } from '@/core/types/optional'

export interface CustomerProps {
  name: string
  email: string
  phone: string
  createdAt: Date
}

export class Customer extends Entity<CustomerProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  get phone() {
    return this.props.phone
  }

  get createdAt() {
    return this.props.createdAt
  }

  set name(value) {
    this.props.name = value
  }

  set email(value) {
    this.props.email = value
  }

  set phone(value) {
    this.props.phone = value
  }

  static create(
    props: Optional<CustomerProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const customer = new Customer(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return customer
  }
}
