import { prisma } from "@/lib/prisma";

import * as bcrypt from "bcrypt";
interface RequestBody {
  email: string;
  name: string;
  password: string;
  role: string;
}
export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  // validations
  // old user
  // @ts-ignore
  const oldUser = await prisma.User.findFirst({
    where: {
      email: body.email,
    },
  });
  if (oldUser) {
    return new Response("User already exists");
  }

  // hash the password
  const hashed_password = await bcrypt.hash(body.password, 10);
  // @ts-ignore
  const user = await prisma.User.create({
    data: {
      email: body.email,
      name: body.name,
      password: hashed_password,
      role: body.role,
    },
  });
  const { password, ...userwithoutpassword } = user;
  return new Response(JSON.stringify(userwithoutpassword));
}
