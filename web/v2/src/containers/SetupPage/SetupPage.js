import React from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import "./SetupPage.scss";
import ImageSelector from "../../components/ImageSelector/ImageSelector";
import { KEYS_ARRAY } from "./../../constants/keyboard";
import GroupBox from "../../components/GroupBox/GroupBox";
import Input from "./../../components/Input/Input";
import Slider from "@material-ui/core/Slider";

const SetupPage = props => {
  return (
    <div className="setup-page">
      <div className="setup-page_groups">
        <div className="setup-page_groups_ipaddress">
          <GroupBox title="What's your robot Ip Address?">
            <div className="setup-page_groups_ipaddress_input">
              <Input placeholder="<xxx.xxx.xxx.xxx>" />
            </div>
          </GroupBox>
        </div>
        <div className="setup-page_groups_keyboard">
          <GroupBox title="Select your controls">
            <div className="setup-page_groups_keyboard_keys">
              <ImageSelector
                images={KEYS_ARRAY}
                onSelect={keys => console.log(keys)}
              />
            </div>
          </GroupBox>
        </div>
        <div className="setup-page_groups_speed">
          <GroupBox title="Transmition speed (ms)">
            <div className="setup-page_groups_speed_slider">
              <Slider
                defaultValue={100}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={20}
                max={200}
              />
            </div>
          </GroupBox>
        </div>
      </div>
    </div>
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
)(SetupPage);
