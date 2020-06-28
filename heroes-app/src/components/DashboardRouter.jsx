import React from "react";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Switch } from "react-router-dom";
import DcPage from "../pages/DcPage";
import Header from "./Header";
import HeroPage from "../pages/HeroPage";
import MarvelPage from "../pages/MarvelPage";

const DashboardRouter = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div className="container">
        <br />
        <Switch>
          <Route path="/marvel" exact component={MarvelPage} />
          <Route path="/hero/:id" exact component={HeroPage} />
          <Route path="/dc" exact component={DcPage} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRouter;
