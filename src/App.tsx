import * as React from "react";
import "./App.css";
import Todos from "./Todos";

export const App = () => (
  <React.Suspense fallback={<span>loading</span>}>
    <Todos />
  </React.Suspense>
);

export default App;
