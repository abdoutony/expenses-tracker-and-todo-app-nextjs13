import { prisma } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const userWithTransactions = await prisma.transaction.findMany({
      where: {
        userId: params.id,
      },
    });
    var total = 0;
    var expenses = 0;
    var income = 0;
    userWithTransactions.forEach((el) => {
      console.log("Type:", el.type);
      if (el.type === "expenses") {
        expenses = expenses + el.amount;
      }
      if (el.type === "income") {
        income = income + el.amount;
      }
    });

    total = income + expenses;

    // console.log("User with transactions:", userWithTransactions);
    return new Response(JSON.stringify({ total, expenses, income }));
  } catch (error) {
    console.error("Error fetching user with transactions:", error);
    return null;
  }
}
