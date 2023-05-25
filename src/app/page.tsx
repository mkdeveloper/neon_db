import { db, todoTable } from "@/lib/drizzle";

const GetTodos = async () => {
  const res = await db.select().from(todoTable);

  console.log(res);
  return res;
};

export default async function Home() {
  const todos = await GetTodos();
  console.log(todos);
  return <h1>Todo App</h1>;
}
