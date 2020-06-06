import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./home";
import Search from "./App";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
