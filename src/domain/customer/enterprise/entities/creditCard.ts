import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/uniqueEntityId'
import { Optional } from '@/core/types/optional'
import { CardNumber } from './valueObject/cardNumber'

export interface CreditCardProps {
  customerId: UniqueEntityId
  cardNumber: CardNumber
  expirationDate: Date
  securityCode: string
  nameOnCard: number
  createdAt: Date
}

export class CreditCard extends Entity<CreditCardProps> {

  get customerId() {
    return this.props.customerId
  }

  get cardNumber() {
    return this.props.cardNumber.value
  }

  get expirationDate() {
    return this.props.expirationDate
  }

  get securityCode() {
    return this.props.securityCode
  }

  get nameOnCard() {
    return this.props.nameOnCard
  }

  get createdAt() {
    return this.props.createdAt
  }

  set cardNumber(value) {
    this.props.cardNumber.value = value
  }

  set expirationDate(value) {
    this.props.expirationDate = value
  }

  set securityCode(value) {
    this.props.securityCode = value
  }

  set nameOnCard(value) {
    this.props.nameOnCard = value
  }

  static create(props: Optional<CreditCardProps, 'createdAt'>,
  id?: UniqueEntityId,) {
    const creditCard = new CreditCard({
      ...props,
      createdAt: new Date()
    }, id)

    return creditCard
  }
}