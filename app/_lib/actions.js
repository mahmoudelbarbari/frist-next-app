"use server";
import { redirect } from "next/navigation";
import todosModel from "./schema/todos";
import usersModel from "./schema/users";

export async function saveTodo(formData) {
  let name = formData.get("name");
  let status = formData.get("status");
  await todosModel.create({ name, status });
  redirect("/todos");
}

export async function addUser(fromUser) {
  let name = fromUser.get("name");
  let email = fromUser.get("email");
  let phoneNum = fromUser.get("phoneNum");
  let company = fromUser.get("company");
  await usersModel.create({ name, email, phoneNum, company });
  redirect("/users");
}
