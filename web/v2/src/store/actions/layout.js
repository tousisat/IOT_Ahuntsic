import * as actionTypes from "./actionsType";

const _toasterShow = (message, status) => {
  return {
    type: actionTypes.SHOW_TOASTER,
    message,
    status
  };
};

const _toasterHide = () => {
  return {
    type: actionTypes.HIDE_TOASTER
  };
};

const _loaderShow = message => {
  return {
    type: actionTypes.SHOW_LOADER,
    message
  };
};

const _loaderHide = () => {
  return {
    type: actionTypes.HIDE_LOADER
  };
};

//----------------------------------------------------

export const showToaster = (message, status) => dispatch => {
  dispatch(_toasterShow(message, status));
  setTimeout(() => {
    dispatch(_toasterHide());
  }, 3000);
};

export const hideToaster = () => dispatch => {
  dispatch(_toasterHide());
};

export const showLoader = message => dispatch => {
  dispatch(_loaderShow(message));
};

export const hideLoader = () => dispatch => {
  dispatch(_loaderHide());
};
