import * as React from "react";
import { GetTodos } from "./queries/__generated__/GetTodos";
import { GetTodosQuery, getTodosQuery } from "./queries/todos";

export const Todos = () => (
  <GetTodosQuery query={getTodosQuery}>
    {({ loading, error, data }) => {
      if (loading) {
        return <span>loading</span>;
      }

      if (error) {
        return <span>error</span>;
      }

      return renderTodos(data);
    }}
  </GetTodosQuery>
);

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
