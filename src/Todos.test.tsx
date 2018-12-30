import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { MockedResponse, MockLink } from "apollo-link-mock";
import * as React from "react";
import { ApolloProvider } from "react-apollo-hooks";
import { cleanup, render, wait } from "react-testing-library";
import { GetTodos, GetTodos_allTodos } from "./queries/__generated__/GetTodos";
import { getTodosQuery } from "./queries/todos";
import { Todos } from "./Todos";

function createClient(mocks: MockedResponse[]) {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new MockLink(mocks)
  });
}

afterEach(cleanup);

it("should render todos", async () => {
  const todos: GetTodos_allTodos[] = [
    {
      __typename: "Todo",
      completed: true,
      id: "1",
      title: "the todo title"
    }
  ];

  const data: GetTodos = {
    allTodos: todos
  };

  const mocks: MockedResponse[] = [
    {
      request: {
        query: getTodosQuery
      },
      result: {
        data
      }
    }
  ];

  const client = createClient(mocks);
  const wrapper = render(
    <React.Suspense fallback={<span>loading</span>}>
      <ApolloProvider client={client}>
        <Todos />
      </ApolloProvider>
    </React.Suspense>
  );

  await wait(() => {
    todos.forEach(todo => {
      expect(wrapper.getByText(todo.title)).toBeDefined();
    });
  });
});
