import { compare } from "bcrypt";
import { sign, decode, verify } from "jsonwebtoken";

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

    const token = sign({ username }, "0aa9d09d0e9281cd798f10e8864552e1", {
      subject: client.id,
      expiresIn: '1d'
    });

    return token;
  };
};