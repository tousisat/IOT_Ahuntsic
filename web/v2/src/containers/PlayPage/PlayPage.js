import React from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import "./PlayPage.scss";

const PlayPage = props => {
  return <div>Play Page</div>;
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
)(PlayPage);
