import { Request, Response } from "express";
import { FindAllDeliverymanDeliveriesUseCase } from "./FindAllDeliverymanDeliveriesUseCase";

export class FindAllDeliverymanDeliveriesController {
  async handle(req: Request, res: Response) {
    const { id_deliveryman } = req;

    const findAllDeliverymanDeliveriesUseCase = new FindAllDeliverymanDeliveriesUseCase();

    const result = await findAllDeliverymanDeliveriesUseCase.execute(id_deliveryman);

    return res.json(result);
  };
};