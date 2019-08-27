import React from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import "./PlayPage.scss";
import Remote from "../../components/Remote/Remote";
import { ReactComponent as NoCamImg } from "../../assets/images/noCamera.svg";

const PlayPage = props => {
  const { selkeys } = props;
  return (
    <div className="play-page">
      <div className="play-page_camera">
        <div className="play-page_camera_none">
          <NoCamImg />
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
