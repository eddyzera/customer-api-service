import { describe, expect, it } from 'vitest'
import { CardNumber } from '../cardNumber'

describe('CardNumber', () => {

  it('should return card number', () => {
    const expected = '5555555555554444'
    const cardNumber = CardNumber.create('5555555555554444')

    expect(cardNumber.value).toEqual(expected)
  })

  it('should return true if card number is valid', () => {
    const cardNumber = CardNumber.create('5555555555554444')
    expect(cardNumber.isValidCardNumber).toBeTruthy()
  })

  it('should return false if card number is not valid', () => {
    const cardNumber = CardNumber.create('5555555555554441')
    expect(cardNumber.isValidCardNumber).not.toBeTruthy()
  })
})