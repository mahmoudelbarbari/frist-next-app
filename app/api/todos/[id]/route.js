import todosModel from "@/app/_lib/schema/todos";

export async function GET({ params }) {
  try {
    const resolvedParams = await params;

    const todo = await todosModel.findById(resolvedParams.id);

    if (!todo) {
      return new Response("Not Found", { status: 404 });
    }

    return new Response(JSON.stringify(todo), { status: 200 });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
}
