import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Login from "../components/auth/Login";
import CalendarPage from "../components/calendar/Calendar";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={CalendarPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
