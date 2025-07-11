import { dbConnection } from "@/app/_lib/dbConnection";
import usersModel from "@/app/_lib/schema/users";

export async function GET() {
  try {
    await dbConnection();
    const users = await usersModel.find();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(error.message, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await request.json();

    if (!user.name || typeof todo.name !== "string") {
      return Response.json({ error: "name is required" }, { status: 400 });
    }

    const newUser = await usersModel.create({
      name: user.name,
      email: user.email,
      phoneNum: user.phoneNum,
      company: user.company,
    });

    return Response.json(newUser, { status: 201 });
  } catch (error) {
    return Response.json(
      { error: "Failed to create user", details: error.message },
      { status: 500 }
    );
  }
}
