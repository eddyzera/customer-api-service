import { CustomerRepository } from "@/domain/customer/app/repository/types/customerRepository";
import { Customer } from "@/domain/customer/enterprise/entities/customer";

export class InMemoryCustomerRepository implements CustomerRepository {
  public items: Array<Customer> = []

  async create(customer: Customer): Promise<void> {
    this.items.push(customer)
  }

  async findById(id: string): Promise<Customer | null> {
    const customer = this.items.find((it) => it.id.toString() === id)

    if(!customer) {
      return null
    }

    return customer
  }

  async update(customer: Customer): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === customer.id)
    this.items[itemIndex] = customer
  }

  async delete(customer: Customer): Promise<void> {
    const itemIndex = this.items.findIndex((item) => item.id === customer.id)

    this.items.splice(itemIndex, 1)
  }

}