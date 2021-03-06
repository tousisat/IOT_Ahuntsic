import React from "react";
import { connect } from "react-redux";
import "./Header.scss";

import { withRouter } from "react-router-dom";
import * as pages from "../../../constants/navigation";

import { ReactComponent as LogoImg } from "../../../assets/images/robot.svg";
import IconButton from "./../../../components/IconButton/IconButton";

import { Menu, MenuItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { MoreVert, Settings, PlayArrow } from "@material-ui/icons";

const Header = props => {
  const { isFirstTime, history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const goToPage = path => {
    history.replace(path);
    handleCloseMenu();
  };

  return (
    <header className="header">
      <div className="header_container">
        <div className="header_container_left">
          <div className="header_container_left_logo">
            <IconButton Icon={LogoImg} />
          </div>
          <div className="header_container_left_text">
            <div className="header_container_left_text_title">
              Ahuntsic Robot
            </div>
            <div className="header_container_left_text_subtitle">
              &#64; Raphael Bridi, Jacques Taillefer
            </div>
          </div>
        </div>
        <div className="header_container_right">
          <div className="header_container_right_button">
            <IconButton
              Icon={MoreVert}
              onClick={event => setAnchorEl(event.currentTarget)}
            />
          </div>
          <div className="header_container_right_menu">
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              <MenuItem onClick={() => goToPage(pages.SETUP_PAGE.path)}>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Setup" />
              </MenuItem>
              <MenuItem
                disabled={isFirstTime}
                onClick={() => goToPage(pages.PLAY_PAGE.path)}
              >
                <ListItemIcon>
                  <PlayArrow />
                </ListItemIcon>
                <ListItemText primary="Play" />
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    isFirstTime: state.setup.isFirstTime
  };
};

const mapDispatchToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
