import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  private usersRepository: IUsersRepository;
  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  execute({ user_id }: IRequest): User[] {
    const isUserAdmin = this.usersRepository.findById(user_id);
    if (!isUserAdmin) {
      throw new Error("User not found");
    }
    if (isUserAdmin.admin === false) {
      throw new Error("User not admin");
    } else {
      return this.usersRepository.list();
    }
  }
}

export { ListAllUsersUseCase };
