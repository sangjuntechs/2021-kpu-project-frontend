import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
    </BrowserRouter>
  );
};

export default AppRouter;
