import { User } from "../../model/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const isUserExists = this.users.find((user) => user.id === id);
    if (!isUserExists) {
      return undefined;
    }
    return isUserExists;
  }

  findByEmail(email: string): User | undefined {
    const isUserExists = this.users.find((user) => user.email === email);
    if (!isUserExists) {
      return undefined;
    }
    return isUserExists;
  }

  turnAdmin(receivedUser: User): User {
    const userChangeToAdmin = this.users.find(
      (user) => user.id === receivedUser.id
    );
    userChangeToAdmin.admin = true;
    return userChangeToAdmin;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
