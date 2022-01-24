import { Request, Response } from "express";
import { FindAllClientDeliveriesUseCase } from "./FindAllClientDeliveriesUseCase";

export class FindAllClientDeliveriesController {
  async handle(req: Request, res: Response) {
    const { id_client } = req;

    const findAllClientDeliveriesUseCase = new FindAllClientDeliveriesUseCase();

    const result = await findAllClientDeliveriesUseCase.execute(id_client);

    return res.json(result);
  };
};