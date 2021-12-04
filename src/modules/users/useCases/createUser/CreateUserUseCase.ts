import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  private usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ email, name }: IRequest): User {
    const isUserEmailExists = this.usersRepository.findByEmail(email);
    if (isUserEmailExists) {
      throw new Error("User already exists");
    }
    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
