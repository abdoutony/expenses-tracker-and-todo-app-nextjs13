import { signJwtAccessToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcrypt";
interface RequestBody {
  email: string;
  password: string;
}
export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  // @ts-ignore
  const user = await prisma.User.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    console.log(user);
    const { password, ...userwithoutpassword } = user;
    const accessToken = signJwtAccessToken(userwithoutpassword);
    const result = {
      ...userwithoutpassword,
      accessToken,
    };
    return new Response(JSON.stringify(result));
  } else {
    return new Response(null);
  }
}
