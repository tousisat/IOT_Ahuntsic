import * as actionTypes from "../actions/actionsType";
import { STATUS_INFO } from "../../constants/layout";

const initialState = {
  isToasterShow: false,
  toasterMessage: null,
  toasterStatus: STATUS_INFO,
  isLoading: false,
  loadingMessage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_TOASTER:
      return {
        ...state,
        isToasterShow: true,
        toasterMessage: action.message,
        toasterStatus: action.status
      };
    case actionTypes.HIDE_TOASTER:
      return {
        ...state,
        isToasterShow: false,
        toasterMessage: null,
        toasterStatus: STATUS_INFO
      };
    case actionTypes.SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
        loadingMessage: action.message
      };
    case actionTypes.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
        loadingMessage: null
      };
    default:
      return state;
  }
};

export default reducer;
