import { dbConnection } from "@/app/_lib/dbConnection";
import usersModel from "@/app/_lib/schema/users";

export async function GET(req, { params }) {
  try {
    await dbConnection();
    const user = await usersModel.findById(params.id);

    if (!user) {
      return new Response("User not Found", { status: 404 });
    }

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
}
