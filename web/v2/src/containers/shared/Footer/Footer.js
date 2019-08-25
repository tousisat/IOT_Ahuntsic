import React from "react";
import { connect } from "react-redux";
import "./Footer.scss";

import IconButton from "../../../components/IconButton/IconButton";
import Button from "../../../components/Button/Button";

import { ReactComponent as FacebookImg } from "../../../assets/icons/facebook.svg";
import { ReactComponent as TwitterImg } from "../../../assets/icons/twitter.svg";
import { ReactComponent as InstagramImg } from "../../../assets/icons/instagram.svg";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_container_general">
          <div className="footer_container_general_item">
            <Button status={"transparent"}>Contact us</Button>
          </div>
          <div className="footer_container_general_separator" />
          <div className="footer_container_general_item">
            <Button status={"transparent"}>About us</Button>
          </div>
          <div className="footer_container_general_separator" />
          <div className="footer_container_general_item">
            <Button status={"transparent"}>Questions</Button>
          </div>
        </div>
        <div className="footer_container_social">
          <div className="footer_container_social_item">
            <IconButton Icon={FacebookImg} />
          </div>
          <div className="footer_container_social_item">
            <IconButton Icon={TwitterImg} />
          </div>
          <div className="footer_container_social_item">
            <IconButton Icon={InstagramImg} />
          </div>
        </div>
        <div className="footer_container_copyright">
          &copy; 2019 Stormopus. All rights reserved
        </div>
      </div>
    </footer>
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
)(Footer);
