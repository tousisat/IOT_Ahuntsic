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
  const { ip, port, selkeys, spd, saveSetup, history } = props;
  const [ipaddressAndPort, setIpAddressAndPort] = React.useState(ip ? port ? `${ip}:${port}` : ip : "");
  const [selectedKeys, setSelectedKeys] = React.useState(selkeys);
  const [speed, setSpeed] = React.useState(spd);
  React.useEffect(() => {
    setIpAddressAndPort(ip ? port ? `${ip}:${port}` : ip : "");
    setSelectedKeys(selkeys);
    setSpeed(spd);
  }, [ip, port, selkeys, spd]);
  const saveHandler = () => {
    const myCurrentIp = ipaddressAndPort.split(":")[0].trim(); //get ipaddress and trim
    let myCurrentPort = ipaddressAndPort.split(":")[1]; //get port
    myCurrentPort = myCurrentPort ? myCurrentPort : ""; //check if port provided
    myCurrentPort = Math.abs(parseInt(myCurrentPort)); //convert port to number
    if (isNaN(myCurrentPort)) myCurrentPort = ""; //empty port if NaN
    saveSetup(myCurrentIp, myCurrentPort, selectedKeys, speed, history);
  };
  return (
    <div className="setup-page">
      <div className="setup-page_groups">
        <div className="setup-page_groups_ipaddress">
          <GroupBox title="What's your robot Ip Address and Port?">
            <div className="setup-page_groups_ipaddress_input">
              <Input
                placeholder="<xxx.xxx.xxx.xxx:xxx>"
                value={ipaddressAndPort}
                onChange={el => setIpAddressAndPort(el.target.value)}
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
    port: state.setup.port,
    selkeys: state.setup.selectedKeys,
    spd: state.setup.speed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveSetup: (ip, port, selkeys, spd, history) =>
      dispatch(actions.saveSetup(ip, port, selkeys, spd, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupPage);
