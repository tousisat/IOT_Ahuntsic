import React from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import "./SetupPage.scss";

const SetupPage = props => {
  return <div>Setup Page</div>;
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
)(SetupPage);
