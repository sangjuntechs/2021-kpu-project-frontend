import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DetailPage from "../pages/DetailPage";
import UserPage from "../pages/UserPage";
import Login from "./Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/Product/detail/:id" component={DetailPage} />
      <Route path="/Member/:id" component={UserPage} />
    </BrowserRouter>
  );
};

export default AppRouter;
