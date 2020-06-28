import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import DashboardRouter from "./DashboardRouter";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" component={DashboardRouter} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
