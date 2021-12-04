import { Request, Response } from "express";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  private listAllUsersUseCase: ListAllUsersUseCase;
  constructor(listAllUsersUseCase: ListAllUsersUseCase) {
    this.listAllUsersUseCase = listAllUsersUseCase;
  }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const all = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });
      return response.json(all);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListAllUsersController };
