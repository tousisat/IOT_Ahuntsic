import * as actionTypes from "../actions/actionsType";
import * as keys from "./../../constants/keyboard";

const initialState = {
  ipaddress: "",
  port: null,
  selectedKeys: [keys.UP_KEY, keys.DOWN_KEY, keys.RIGHT_KEY, keys.LEFT_KEY],
  speed: 100,
  isFirstTime: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SETUP:
      return {
        ...state,
        ipaddress: action.ipaddress,
        port: action.port,
        selectedKeys: action.selectedKeys,
        speed: action.speed,
        isFirstTime: false
      };
    case actionTypes.IS_FIRST_TIME_SETUP:
      return {
        ...state,
        isFirstTime: true
      };
    default:
      return state;
  }
};

export default reducer;
