import React from "react";
import { connect } from "react-redux";
import "./NavBar.scss";

import IconButton from "../../../components/IconButton/IconButton";
import Button from "./../../../components/Button/Button";

import { ReactComponent as SearchImg } from "../../../assets/icons/search.svg";
import { ReactComponent as CartImg } from "../../../assets/icons/cart.svg";

const Navbar = props => {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar_container_item">
          <Button status={"transparent"}>Log-in</Button>
        </div>
        <div className="navbar_container_item">
          <IconButton Icon={SearchImg} />
        </div>
        <div className="navbar_container_item">
          <IconButton Icon={CartImg} />
        </div>
      </div>
    </nav>
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
)(Navbar);
