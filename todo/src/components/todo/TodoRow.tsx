import type { Todo } from "./TodoList";

export default function TodoRow({ todo }: { todo: Todo }) {
  return (
    <div>
      <p>{todo.body}</p>
    </div>
  );
}
