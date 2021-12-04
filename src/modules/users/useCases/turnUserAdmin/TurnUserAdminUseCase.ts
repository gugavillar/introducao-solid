import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  private usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User {
    const isUserExist = this.usersRepository.findById(user_id);
    if (isUserExist) {
      return this.usersRepository.turnAdmin(isUserExist);
    }
    throw new Error("User not found");
  }
}

export { TurnUserAdminUseCase };
