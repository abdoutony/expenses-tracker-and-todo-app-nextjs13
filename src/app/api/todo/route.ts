import { prisma } from "@/lib/prisma";
export async function POST(request: Request) {
  const body = await request.json();
  const new_todo = {
    todo: body.todo,
    userId: body.userId,
  };
  // @ts-ignore
  const todo = await prisma.Todo.create({
    data: new_todo,
  });
  return new Response(JSON.stringify(todo));
}
