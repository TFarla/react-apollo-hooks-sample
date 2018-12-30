/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTodos
// ====================================================

export interface GetTodos_allTodos {
  __typename: "Todo";
  id: string;
  title: string;
  completed: boolean;
}

export interface GetTodos {
  allTodos: (GetTodos_allTodos | null)[] | null;
}

export interface GetTodosVariables {
  count?: number | null;
}
