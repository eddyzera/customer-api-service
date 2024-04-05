import { InMemoryCustomerRepository } from 'test/inMemoryDataBase/inMemoryCustomerRepository'
import { describe, it, beforeEach, expect } from 'vitest'
import { CreateCustomerUseCase } from '../createCustomerUseCase'
import { makeCustomer } from 'test/factory/makeCustomer'

let inMemoryCustomerRepository: InMemoryCustomerRepository
let sut: CreateCustomerUseCase

describe('CreateCustomerUseCase', () => {
  beforeEach(() => {
    inMemoryCustomerRepository = new InMemoryCustomerRepository()
    sut = new CreateCustomerUseCase(inMemoryCustomerRepository)
  })
  it('should be able create a new user', async () => {
    const customerFaker = makeCustomer()
    const { customer } = await sut.execute(customerFaker)

    expect(customer.id).toBeTruthy()
  })
})
