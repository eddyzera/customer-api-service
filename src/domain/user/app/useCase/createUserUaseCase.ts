import { hash } from 'bcryptjs'
import { User } from '../../enterprise/entities/user'
import { UserRepository } from '../repository/userRepository'

interface CreateUserUseCaseRequest {
  email: string
  name: string
  password: string
}

interface CreateUserUseCaseResponse {
  user: User
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
    name,
    password,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const passwordHash = await hash(password, 6)

    const user = User.create({
      email,
      name,
      password_hash: passwordHash,
    })

    await this.userRepository.create(user)

    return {
      user,
    }
  }
}
