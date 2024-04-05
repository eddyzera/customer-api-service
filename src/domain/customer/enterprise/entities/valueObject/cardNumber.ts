export class CardNumber {
  private cardNumber: string

  private constructor(cardNumber: string) {
    this.cardNumber = cardNumber
  }

  private isValid() {
    const digits = this.cardNumber.toString().split('').map(Number)
    let sum = 0
    const length = digits.length
    let isEven = false

    for (let i = length - 1; i >= 0; i--) {
      let digit = digits[i]

      if (isEven) {
        digit *= 2
        if (digit > 9) {
          digit -= 9
        }
      }

      sum += digit
      isEven = !isEven
    }

    return sum % 10 === 0
  }

  get isValidCardNumber() {
    return this.isValid()
  }

  get value() {
    return this.cardNumber
  }

  set value(value) {
    this.cardNumber = value
  }

  static create(cardNumber: string) {
    const value = new CardNumber(cardNumber)

    return value
  }
}
