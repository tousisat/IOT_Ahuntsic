import * as actionTypes from "./actionsType";
import { _connectStop } from "./play";
import { showToaster } from "./layout";
import { PLAY_PAGE } from "../../constants/navigation";

const _updateSetup = (ipaddress, port, selectedKeys, speed) => {
  return {
    type: actionTypes.UPDATE_SETUP,
    ipaddress,
    port,
    selectedKeys,
    speed
  };
};

const _firstTimeSetup = () => {
  return {
    type: actionTypes.IS_FIRST_TIME_SETUP
  };
};

//-------------------------------------------

export const getSetupFromCache = () => dispatch => {
  const ipaddress = localStorage.getItem("ipaddress");
  const port = localStorage.getItem("port");
  const selectedKeys = localStorage.getItem("selectedKeys");
  const speed = localStorage.getItem("speed");
  if ((ipaddress && ipaddress !== "") || (port && port !== "")) {
    dispatch(
      _updateSetup(
        ipaddress,
        parseInt(port),
        JSON.parse(selectedKeys),
        parseInt(speed)
      )
    );
  } else {
    dispatch(_firstTimeSetup());
  }
};

export const saveSetup = (
  ipaddress,
  port,
  selectedKeys,
  speed,
  history
) => dispatch => {
  //check if ipaddress has been changed
  const oldIPAddress = localStorage.getItem("ipaddress");
  const oldPort = localStorage.getItem("port");
  if (oldIPAddress !== ipaddress || oldPort !== port.toString()) {
    dispatch(_connectStop());
  }
  if (ipaddress === "") {
    dispatch(showToaster("Provide an IP address", "error"));
  } else if (port === "") {
    dispatch(showToaster("Provide a valid port number", "error"));
  } else {
    localStorage.setItem("ipaddress", ipaddress);
    localStorage.setItem("port", port);
    localStorage.setItem("selectedKeys", JSON.stringify(selectedKeys));
    localStorage.setItem("speed", speed);
    dispatch(_updateSetup(ipaddress, port, selectedKeys, speed));
    dispatch(showToaster("Setting saved in cache!", "success"));
    history.replace(PLAY_PAGE.path);
  }
};
