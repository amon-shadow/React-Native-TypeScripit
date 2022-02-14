import { AppState } from "../interfaces/AppInterfaces";
import { createReducer } from "reduxsauce";
import AppTypes from "../types/AppTypes";

export const APP_INIT_STATE: AppState = {
  showLoader: false,
  showAlert: false,
  alertMessage: undefined,
  isInternetLost: false,
}


const showLoaderReducer = (state = APP_INIT_STATE) => {
  return {
    ...state,
    showLoader: true,
  }
};

const hideLoaderReducer = (state = APP_INIT_STATE) => {
  return {
    ...state,
    showLoader: false,
  }
};

const showAlertReducer = (state = APP_INIT_STATE, action: any) => {
  return {
    ...state,
    alertMessage: action.message,
    showAlert: true,
  }
};

const hideAlertReducer = (state = APP_INIT_STATE) => {
  return {
    ...state,
    alertMessage: "",
    showAlert: false,
  }
};

const isInternetLostReducer = (state = APP_INIT_STATE, action: any) => {
  return {
    ...state,
    isInternetLost: action.value,
  }
};

const ACTION_HANDLERS = {
  [AppTypes.SHOW_LOADER]: showLoaderReducer,
  [AppTypes.HIDE_LOADER]: hideLoaderReducer,
  [AppTypes.SHOW_ALERT]: showAlertReducer,
  [AppTypes.HIDE_ALERT]: hideAlertReducer,
  [AppTypes.IS_INTERNET_LOST]: isInternetLostReducer,
}

export default createReducer(APP_INIT_STATE, ACTION_HANDLERS);

