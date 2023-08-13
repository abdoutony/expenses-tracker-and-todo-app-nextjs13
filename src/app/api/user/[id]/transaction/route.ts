import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userWithTransactions = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        transactions: true,
      },
    });

    // console.log("User with transactions:", userWithTransactions);
    return new Response(JSON.stringify(userWithTransactions));
  } catch (error) {
    console.error("Error fetching user with transactions:", error);
    return null;
  }
}
