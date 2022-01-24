import { prisma } from "../../../../../database/prismaClient";

interface IDeliveryCompleted {
  id_deliveryman: string;
  id_delivery: string;
};

export class UpdateDeliveryCompletedUseCase {
  async execute({ id_deliveryman, id_delivery }: IDeliveryCompleted) {
    const delivery = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman
      },
      data: {
        end_at: new Date()
      }
    });

    return delivery;
  };
};