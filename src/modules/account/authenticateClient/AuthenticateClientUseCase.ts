import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
  username: string;
  password: string;
};

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient ) {
    const client = await prisma.clients.findUnique({
      where: {
        username
      }
    });

    if ( !client ) {
      throw new Error("Username or password invalid");
    };

    const isValidPassword = await compare(password, client.password);

    if ( !isValidPassword ) {
      throw new Error("Username or password invalid");
    };

    const token = sign({ username }, String(process.env.JWT_HASH), {
      subject: client.id,
      expiresIn: '1d'
    });

    return token;
  };
};