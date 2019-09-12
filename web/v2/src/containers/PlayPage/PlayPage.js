import React from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import "./PlayPage.scss";
import Remote from "../../components/Remote/Remote";
import { ReactComponent as NoCamImg } from "../../assets/images/noCamera.svg";
import Button from "./../../components/Button/Button";
import { CAMERA_IP } from "../../constants/setup";

const PlayPage = props => {
  const {
    ipaddress,
    port,
    selkeys,
    spd,
    isConnect,
    startConnection = () => { },
    endConnection = () => { },
    startKeyLoop,
    stopKeyLoop,
    isLoading
  } = props;
  return (
    <div className="play-page">
      <div className="play-page_camera">
        {!isConnect ? (
          <div className="play-page_camera_none">
            <div className="play-page_camera_none_image">
              <NoCamImg />
            </div>
            <div className="play-page_camera_none_connect">
              <Button
                isLoading={isLoading}
                onClick={() => startConnection(ipaddress, port)}
              >
                Connect
              </Button>
            </div>
          </div>
        ) : (
            <div className="play-page_camera_ok">
              <div className="play-page_camera_ok_image">
                <img src={CAMERA_IP(ipaddress, port + 1)} alt="webcam not working" />
              </div>
              <div className="play-page_camera_ok_disconnect">
                <Button
                  isLoading={isLoading}
                  status="danger"
                  onClick={endConnection}
                >
                  X
              </Button>
              </div>
            </div>
          )}
      </div>
      <div className="play-page_remote">
        <Remote
          disabled={!isConnect}
          keysArray={selkeys}
          onStart={char => startKeyLoop(char, spd)}
          onEnd={char => stopKeyLoop()}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selkeys: state.setup.selectedKeys,
    spd: state.setup.speed,
    ipaddress: state.setup.ipaddress,
    port: state.setup.port,
    isLoading: state.play.isLoading,
    isConnect: state.play.isConnect
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startKeyLoop: (key, spd) => dispatch(actions.startKeyLoop(key, spd)),
    stopKeyLoop: () => dispatch(actions.stopKeyLoop()),
    startConnection: (ipaddress, port) => dispatch(actions.startConnection(ipaddress, port)),
    endConnection: () => dispatch(actions.endConnection())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayPage);
