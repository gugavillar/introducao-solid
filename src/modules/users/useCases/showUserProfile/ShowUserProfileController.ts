import { Request, Response } from "express";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  private showUserProfileUseCase: ShowUserProfileUseCase;
  constructor(showUserProfileUseCase: ShowUserProfileUseCase) {
    this.showUserProfileUseCase = showUserProfileUseCase;
  }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const user = this.showUserProfileUseCase.execute({ user_id });
      return response.json(user);
    } catch (err) {
      return response.status(404).json({ error: err.message });
    }
  }
}

export { ShowUserProfileController };
