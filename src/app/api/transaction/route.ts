import { verifyJwt } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  //   const accessToken = request.headers.get("accessToken");
  //   if (!accessToken || !verifyJwt(accessToken)) {
  //     return new Response("unauthorized", {
  //       status: 401,
  //     });
  //   }
  const body = await request.json();
  const new_transaction = {
    title: body.title,
    type: body.type,
    amount: body.amount,
    userId: body.userId,
  };

  // @ts-ignore
  const transaction = await prisma.Transaction.create({
    data: new_transaction,
  });
  return new Response(JSON.stringify(transaction));
}
