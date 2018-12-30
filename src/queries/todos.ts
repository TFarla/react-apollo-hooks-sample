import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { GetTodos, GetTodosVariables } from "./__generated__/GetTodos";

export const getTodosQuery = gql`
  query GetTodos($count: Int) {
    allTodos(count: $count) {
      id
      title
      completed
    }
  }
`;

export const useTodosQuery = () =>
  useQuery<GetTodos, GetTodosVariables>(getTodosQuery);
