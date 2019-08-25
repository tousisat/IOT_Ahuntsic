import React from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import "./ProfilPage.scss";

const ProfilPage = props => {
  return <div>Profil Page</div>;
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
)(ProfilPage);
