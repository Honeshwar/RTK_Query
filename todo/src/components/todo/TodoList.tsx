import { useGetAllTodosQuery, useGetTodoQuery } from "../../store/ApiSlice";
import TodoRow from "./TodoRow";
export interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export default function TodoList() {
  const { data: todos, isLoading, isError } = useGetAllTodosQuery();
  const { data: todo, isLoading: l, isError: e } = useGetTodoQuery(1);

  console.log({ todos, isLoading, isError });
  console.log({ todo, l, e });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>error</h1>;
  }
  return (
    <div>
      <h1>TodoList</h1>

      <ul>
        {(todos ?? []).map((t: Todo) => (
          <TodoRow key={t.id} todo={t} />
        ))}
      </ul>
    </div>
  );
}
