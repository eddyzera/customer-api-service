export class SecurityCode {
  private code: string

  private constructor(code: string) {
    this.code = code
  }

  private validationSecurityCode() {
    const cvvRegex = /^[0-9]{3,4}$/
    return cvvRegex.test(this.code)
  }

  get isValidCode() {
    return this.validationSecurityCode()
  }

  get value() {
    return this.code
  }

  static create(code: string) {
    const securityCode = new SecurityCode(code)

    return securityCode
  }
}
