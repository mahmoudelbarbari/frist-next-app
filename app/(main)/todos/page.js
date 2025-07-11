import { GET } from "../../api/todos/route";

export default async function page() {
  let res = await GET();
  let todos = await res.json();
  console.log(todos);
  return (
    <>
      <div className="grid grid-cols-5 gap-5 p-6">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {todo.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1">
                {todo.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
