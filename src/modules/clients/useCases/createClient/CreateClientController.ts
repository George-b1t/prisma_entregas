import { Request, Response } from "express";
import { CraeteClientUseCases } from "./CreatClientUseCase";

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const {
      username,
      password
    } = req.body;

    const createClientUseCase = new CraeteClientUseCases();

    const result = await createClientUseCase.execute({
      username,
      password
    });

    return res.json(result);
  };
};