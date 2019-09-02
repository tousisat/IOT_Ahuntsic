import * as actionTypes from "./actionsType";
import { _connectStop } from "./play";
import { showToaster } from "./layout";

const _updateSetup = (ipaddress, selectedKeys, speed) => {
  return {
    type: actionTypes.UPDATE_SETUP,
    ipaddress,
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
  const selectedKeys = localStorage.getItem("selectedKeys");
  const speed = localStorage.getItem("speed");
  if ((ipaddress && selectedKeys && speed) !== null) {
    dispatch(
      _updateSetup(ipaddress, JSON.parse(selectedKeys), parseInt(speed))
    );
  } else {
    dispatch(_firstTimeSetup());
  }
};

export const saveSetup = (ipaddress, selectedKeys, speed) => dispatch => {
  //check if ipaddress has been changed
  const oldIPAddress = localStorage.getItem("ipaddress");
  if (oldIPAddress !== ipaddress) {
    dispatch(_connectStop());
  }
  localStorage.setItem("ipaddress", ipaddress);
  localStorage.setItem("selectedKeys", JSON.stringify(selectedKeys));
  localStorage.setItem("speed", speed);
  dispatch(_updateSetup(ipaddress, selectedKeys, speed));
  dispatch(showToaster("Setting saved in cache!", "success"));
};
