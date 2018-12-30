import * as React from "react";
import { GetTodos } from "./queries/__generated__/GetTodos";
import { useTodosQuery } from "./queries/todos";

export const Todos = () => {
  const { data, errors } = useTodosQuery();

  if (errors) {
    return <span>errors</span>;
  }

  return renderTodos(data);
};

function renderTodos(data: GetTodos | undefined) {
  if (!data || !data.allTodos) {
    return <span>No todos found</span>;
  }

  return (
    <ul>
      {data.allTodos.map(todo => {
        if (todo) {
          return <li key={todo.id}>{todo.title}</li>;
        }

        return;
      })}
    </ul>
  );
}

export default Todos;
