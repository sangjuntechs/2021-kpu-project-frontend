import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";
import Login from "./Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/Home" component={HomePage} />
      <Route path="/" exact component={Login}></Route>
    </BrowserRouter>
  );
};

export default AppRouter;
