import { dbConnection } from "@/app/_lib/dbConnection";
import todosModel from "@/app/_lib/schema/todos";

export async function GET() {
  try {
    await dbConnection();
    const todos = await todosModel.find();
    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (err) {
    console.log(err);

    return new Response(err.message, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnection();
    const todo = await request.json();

    if (!todo.name || typeof todo.name !== "string") {
      return Response.json({ error: "name is required" }, { status: 400 });
    }

    const newTodo = await todosModel.create({
      name: todo.name,
      status: todo.status || "todo",
    });

    return Response.json(newTodo, { status: 201 });
  } catch (error) {
    return Response.json(
      { error: "Failed to create todo", details: error.message },
      { status: 500 }
    );
  }
}
