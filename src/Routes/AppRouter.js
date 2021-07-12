import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../pages/Homepage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
    </BrowserRouter>
  );
};

export default AppRouter;
