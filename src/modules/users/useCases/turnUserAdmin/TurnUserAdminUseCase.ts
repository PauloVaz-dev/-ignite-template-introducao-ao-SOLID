import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);
    console.log("222222222", user, user_id);
    if (!user) {
      throw new Error("User not found");
    }

    const admin = this.usersRepository.turnAdmin(user);

    return admin;
  }
}

export { TurnUserAdminUseCase };
