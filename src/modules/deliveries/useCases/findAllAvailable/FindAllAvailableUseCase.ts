import { prisma } from "../../../../database/prismaClient";

export class FindAllAvailableUseCase {
  async excute() {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null
      }
    });

    return deliveries;
  };
}