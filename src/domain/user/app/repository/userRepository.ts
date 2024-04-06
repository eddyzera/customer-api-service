import { User } from '@/domain/user/enterprise/entities/user'

export interface UserRepository {
  create(user: User): Promise<void>
  findById(id: string): Promise<User | null>
  update(user: User): Promise<void>
  delete(user: User): Promise<void>
}
