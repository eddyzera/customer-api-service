import { Customer } from "@/domain/order/enterprise/entities/customer";

export interface CustomerRepository {
  create(customer: Customer): Promise<void>
}