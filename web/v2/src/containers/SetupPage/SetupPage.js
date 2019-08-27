import React from "react";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import "./SetupPage.scss";
import ImageSelector from "../../components/ImageSelector/ImageSelector";
import * as keys from "./../../constants/keyboard";
import GroupBox from "../../components/GroupBox/GroupBox";
import Input from "./../../components/Input/Input";
import Slider from "@material-ui/core/Slider";
import Button from "./../../components/Button/Button";

const SetupPage = props => {
  const { ip, selkeys, spd, saveSetup } = props;
  const [ipaddress, setIpAddress] = React.useState(ip);
  const [selectedKeys, setSelectedKeys] = React.useState(selkeys);
  const [speed, setSpeed] = React.useState(spd);
  React.useEffect(() => {
    setIpAddress(ip);
    setSelectedKeys(selkeys);
    setSpeed(spd);
  }, [ip, selkeys, spd]);
  const saveHandler = () => {
    saveSetup(ipaddress, selectedKeys, speed);
  };
  return (
    <div className="setup-page">
      <div className="setup-page_groups">
        <div className="setup-page_groups_ipaddress">
          <GroupBox title="What's your robot Ip Address?">
            <div className="setup-page_groups_ipaddress_input">
              <Input
                placeholder="<xxx.xxx.xxx.xxx>"
                value={ipaddress}
                onChange={el => setIpAddress(el.target.value)}
              />
            </div>
          </GroupBox>
        </div>
        <div className="setup-page_groups_keyboard">
          <GroupBox title="Select your controls">
            <div className="setup-page_groups_keyboard_keys">
              <ImageSelector
                images={keys.KEYS_ARRAY}
                selectedImages={selectedKeys}
                onSelect={keys => setSelectedKeys(keys)}
              />
            </div>
            <div className="setup-page_groups_keyboard_note">
              *Every selected key will send it's <b>lowcase</b> value to the
              arduino serial monitor when pressed. <br /> **Up, Down, Right,
              Left arrows will send "1", "2", "3", "4"
            </div>
          </GroupBox>
        </div>
        <div className="setup-page_groups_speed">
          <GroupBox title="Transmition speed (ms)">
            <div className="setup-page_groups_speed_slider">
              <Slider
                value={speed}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                onChange={(ev, val) => setSpeed(val)}
                step={10}
                marks
                min={20}
                max={200}
              />
            </div>
          </GroupBox>
        </div>
        <div className="setup-page_groups_save">
          <Button onClick={saveHandler}>Save</Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ip: state.setup.ipaddress,
    selkeys: state.setup.selectedKeys,
    spd: state.setup.speed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveSetup: (ip, selkeys, spd) =>
      dispatch(actions.saveSetup(ip, selkeys, spd))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupPage);
