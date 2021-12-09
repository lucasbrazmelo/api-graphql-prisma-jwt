import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function login(email:string, password:string): Promise<object | null> {
  let user: object | null = await prisma.usuarios.findFirst({
    where: {
      email: email,
      senha: password,
    },
    select: {
      nome: true,
      email: true
    },
  });
  return user;
}
export async function profile(email:string): Promise<object | null>  {
  let user: object | null = await prisma.usuarios.findFirst({
    where: {
      email: email,
    },
    select: {
      nome: true,
      email: true
    },
  });
  return user;
}