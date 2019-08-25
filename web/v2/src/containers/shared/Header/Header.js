import React from "react";
import { connect } from "react-redux";
import "./Header.scss";

// import { ReactComponent as LogoImg } from "../../../assets/images/logo.svg";

const Header = props => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_container_logo">LOGO</div>
        <div className="header_container_title">MY TITLE</div>
      </div>
    </header>
  );
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
)(Header);
