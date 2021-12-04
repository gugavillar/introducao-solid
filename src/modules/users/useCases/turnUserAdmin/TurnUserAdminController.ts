import { Request, Response } from "express";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  private turnUserAdminUseCase: TurnUserAdminUseCase;
  constructor(turnUserAdminUseCase: TurnUserAdminUseCase) {
    this.turnUserAdminUseCase = turnUserAdminUseCase;
  }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const user = this.turnUserAdminUseCase.execute({ user_id });
      return response.json(user);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { TurnUserAdminController };
