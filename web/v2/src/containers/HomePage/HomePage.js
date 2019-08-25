import React from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import "./HomePage.scss";

const HomePage = props => {
  return <div>Home Page</div>;
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
