import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";

import Layout from "./hoc/Layout/Layout";
import * as pages from "./constants/navigation";

const App = props => {
  let routes = (
    <Switch>
      <Route
        path={pages.HOME_PAGE.path}
        component={pages.HOME_PAGE.component}
      />
      <Route
        path={pages.PROFIL_PAGE.path}
        component={pages.PROFIL_PAGE.component}
      />
      <Redirect to={pages.HOME_PAGE.path} />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
