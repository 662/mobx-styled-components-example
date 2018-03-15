import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f2f5f7;
  min-height: 100vh;
`;

const Router = () => (
  <BrowserRouter>
    <Wrapper>
      <Switch>
        <Redirect exact path="/" to="/todos" />
        <Route exact path="/todos" component={require("./routes/todos").default} />
        <Route path="/todos/filter" component={require("./routes/todos").default} />
      </Switch>
    </Wrapper>
  </BrowserRouter>
);

export default Router;
