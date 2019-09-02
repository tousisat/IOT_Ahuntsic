import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions";

import "./App.scss";

import Layout from "./hoc/Layout/Layout";
import * as pages from "./constants/navigation";

const App = props => {
  const { getSetupFromCache, isFirstTime } = props;
  React.useEffect(() => {
    getSetupFromCache();
  }, [getSetupFromCache]);
  let routes = (
    <Switch>
      <Route
        path={pages.SETUP_PAGE.path}
        component={pages.SETUP_PAGE.component}
      />
      <Route
        path={pages.PLAY_PAGE.path}
        component={pages.PLAY_PAGE.component}
      />
      <Redirect to={pages.PLAY_PAGE.path} />
    </Switch>
  );

  if (isFirstTime) {
    routes = (
      <Switch>
        <Route
          path={pages.SETUP_PAGE.path}
          component={pages.SETUP_PAGE.component}
        />
        <Redirect to={pages.SETUP_PAGE.path} />
      </Switch>
    );
  }

  return <Layout>{routes}</Layout>;
};

const mapStateToProps = state => {
  return {
    isFirstTime: state.setup.isFirstTime
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSetupFromCache: () => dispatch(actions.getSetupFromCache())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
