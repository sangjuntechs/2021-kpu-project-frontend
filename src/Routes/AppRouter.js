import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import Login from "./Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/Product/detail/:id" component={DetailPage} />
    </BrowserRouter>
  );
};

export default AppRouter;
