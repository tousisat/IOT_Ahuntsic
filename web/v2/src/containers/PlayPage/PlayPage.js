import React from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import "./PlayPage.scss";
import Remote from "../../components/Remote/Remote";
import { ReactComponent as NoCamImg } from "../../assets/images/noCamera.svg";
import Button from "./../../components/Button/Button";

const PlayPage = props => {
  const { selkeys, onConnect = () => {} } = props;
  return (
    <div className="play-page">
      <div className="play-page_camera">
        <div className="play-page_camera_none">
          <div className="play-page_camera_none_image">
            <NoCamImg />
          </div>
          <div className="play-page_camera_none_connect">
            <Button onConnect={onConnect}>Connect</Button>
          </div>
        </div>
      </div>
      <div className="play-page_remote">
        <Remote
          keysArray={selkeys}
          onStart={char => console.log("START", char)}
          onEnd={char => console.log("END", char)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selkeys: state.setup.selectedKeys
  };
};

const mapDispatchToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayPage);
