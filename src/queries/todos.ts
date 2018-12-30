import gql from "graphql-tag";
import { Query } from "react-apollo";
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

export class GetTodosQuery extends Query<GetTodos, GetTodosVariables> {}
