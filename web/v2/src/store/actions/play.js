import * as actionTypes from "./actionsType";
import { init, getIO } from "../../utils/socket";
import { WEB_TO_SERVER_TAG } from "./../../constants/setup";
import { showToaster } from "./layout";
let playLoopInterval;

const _connect = () => {
  return {
    type: actionTypes.CONNECT
  };
};

const _connectStart = () => {
  return {
    type: actionTypes.CONNECT_START
  };
};

export const _connectStop = () => {
  return {
    type: actionTypes.CONNECT_STOP
  };
};

//-------------------------------------------

export const startConnection = ipaddress => dispatch => {
  dispatch(_connect());
  init(ipaddress, callback => {
    switch (callback) {
      case "connect":
        console.log("CONNECTED");
        dispatch(_connectStart());
        break;
      case "disconnect":
        console.log("DISCONNECTED");
        dispatch(_connectStop());
        break;
      case "error":
        console.log("ERROR");
        dispatch(
          showToaster(
            "Oups, something went wrong. Check your IP or your Robot!",
            "error"
          )
        );
        dispatch(_connectStop());
        break;
    }
  });
};

export const endConnection = () => dispatch => {
  dispatch(_connect());
  getIO().disconnect();
};

export const startKeyLoop = (key, loopIntervalMs) => dispatch => {
  getIO().emit(WEB_TO_SERVER_TAG, key);
  console.log(key, loopIntervalMs);
  playLoopInterval = setInterval(() => {
    getIO().emit(WEB_TO_SERVER_TAG, key);
    console.log(key, loopIntervalMs);
  }, loopIntervalMs);
};

export const stopKeyLoop = () => dispatch => {
  clearInterval(playLoopInterval);
  console.log("STOP");
};
