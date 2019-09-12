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

export const startConnection = (ipaddress, port) => dispatch => {
  dispatch(_connect());
  init(ipaddress, port, callback => {
    switch (callback) {
      case "connect":
        dispatch(_connectStart());
        break;
      case "disconnect":
        dispatch(_connectStop());
        break;
      case "error":
        dispatch(
          showToaster(
            "Oups, something went wrong. Check your IP, Port or Robot!",
            "error"
          )
        );
        dispatch(_connectStop());
        break;
      default:
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
  console.log(key);
  playLoopInterval = setInterval(() => {
    getIO().emit(WEB_TO_SERVER_TAG, key);
    console.log(key);
  }, loopIntervalMs);
};

export const stopKeyLoop = () => dispatch => {
  clearInterval(playLoopInterval);
};
