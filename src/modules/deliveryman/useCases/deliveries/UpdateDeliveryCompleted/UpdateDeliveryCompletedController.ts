import { Request, Response } from "express";
import { UpdateDeliveryCompletedUseCase } from "./UpdateDeliveryCompletedUseCase";

export class UpdateDeliveryCompletedController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { id_deliveryman } = req;

    const updateDeliveryCompletedUseCase = new UpdateDeliveryCompletedUseCase();

    const result = await updateDeliveryCompletedUseCase.execute({
      id_delivery: id,
      id_deliveryman
    });

    return res.json(result);
  };
};