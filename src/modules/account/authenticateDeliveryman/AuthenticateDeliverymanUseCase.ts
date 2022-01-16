import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
};

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman ) {
    const deliveryman = await prisma.deliveryman.findUnique({
      where: {
        username
      }
    });

    if ( !deliveryman ) {
      throw new Error("Username or password invalid");
    };

    const isValidPassword = await compare(password, deliveryman.password);

    if ( !isValidPassword ) {
      throw new Error("Username or password invalid");
    };

    const token = sign({ username }, String(process.env.JWT_HASH_DELIVERYMAN), {
      subject: deliveryman.id,
      expiresIn: '1d'
    });

    return token;
  };
};