import { useDeleteTodoMutation } from "../../store/deleteSlice";
import { useLazyGetTodoQuery } from "../../store/ApiSlice";
import type { Todo } from "./TodoList";

export default function TodoRow({ todo }: { todo: Todo }) {
  const [trigger, result] = useDeleteTodoMutation();
  const [triggerGet, resultGet, lastPromiseInfo_lastTrigger] = useLazyGetTodoQuery();
  const { data, isLoading, isError, error } = result ?? {};

  return (
    <div>
      <p>{todo.title}</p>
      <button
        type="button"
        onClick={() => (todo?.id ? trigger(todo.id) : null)}
      >
        Click
      </button>
      <p>
        Child:
        <span>{isLoading && "Loading..."}</span>
        <span>{isError && error.messages}</span>
        <span>{data?.title ?? ""}</span>
      </p>
    </div>
  );
}
