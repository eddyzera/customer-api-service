import { describe, expect, it } from 'vitest'
import { SecurityCode } from '../securityCode'

describe('SecurityCode', () => {

  it('should return security code', () => {
    const expected = '123'
    const cardNumber = SecurityCode.create('123')

    expect(cardNumber.value).toEqual(expected)
  })

  it('should check that code is in the correct format', () => {
    const cardNumber = SecurityCode.create('123')
    expect(cardNumber.isValidCode).toBeTruthy()
  })

  it('should return false if card number is not valid', () => {
    const cardNumber = SecurityCode.create('')
    expect(cardNumber.isValidCode).not.toBeTruthy()
  })
})