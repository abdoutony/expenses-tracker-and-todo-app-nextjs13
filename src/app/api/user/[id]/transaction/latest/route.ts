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
        transactions: {
          orderBy: {
            createdAt: "desc", // Order by createdAt in descending order (latest first)
          },
          take: 2, // Retrieve only the top 2 records
        },
      },
    });

    // console.log("User with transactions:", userWithTransactions);
    return new Response(JSON.stringify(userWithTransactions));
  } catch (error) {
    console.error("Error fetching user with transactions:", error);
    return null;
  }
}
