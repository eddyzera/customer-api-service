import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/uniqueEntityId'
import { Optional } from '@/core/types/optional'

export interface AddressProps {
  customerId: UniqueEntityId
  street: string
  numberHouse: number
  city: string
  zipCode: number
  country: string
  createdAt: Date
}

export class Address extends Entity<AddressProps> {
  get customerId() {
    return this.props.customerId
  }

  get street() {
    return this.props.street
  }

  get numberHouse() {
    return this.props.numberHouse
  }

  get city() {
    return this.props.city
  }

  get zipCode() {
    return this.props.zipCode
  }

  get country() {
    return this.props.country
  }

  get createdAt() {
    return this.props.createdAt
  }

  set street(value) {
    this.props.street = value
  }

  set numberHouse(value) {
    this.props.numberHouse = value
  }

  set city(value) {
    this.props.city = value
  }

  set zipCode(value) {
    this.props.zipCode = value
  }

  set country(value) {
    this.props.country = value
  }

  static create(
    props: Optional<AddressProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const customer = new Address(
      {
        ...props,
        createdAt: new Date(),
      },
      id,
    )

    return customer
  }
}
