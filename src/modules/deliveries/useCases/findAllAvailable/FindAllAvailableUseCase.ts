import { prisma } from "../../../../database/prismaClient";

export class FindAllAvailableUseCase {
  async excute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        id_deliveryman: null,
        end_at: null
      }
    });

    return deliveries;
  };
}