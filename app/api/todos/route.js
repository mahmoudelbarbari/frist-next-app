import { dbConnection } from "@/app/_lib/dbConnection";
import todosModel from "@/app/_lib/schema/todos";

dbConnection();

export async function GET() {
  try {
    const todos = await todosModel.find();
    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (err) {
    console.log(err);

    return new Response(err.message, { status: 500 });
  }
}

export async function POST(request) {
  await dbConnection();

  try {
    const body = await request.json();

    if (!body.name || typeof body.name !== "string") {
      return Response.json({ error: "name is required" }, { status: 400 });
    }

    const newTodo = await todosModel.create({
      name: body.name,
      status: body.status || "todo",
    });

    return Response.json(newTodo, { status: 201 });
  } catch (error) {
    return Response.json(
      { error: "Failed to create todo", details: error.message },
      { status: 500 }
    );
  }
}
