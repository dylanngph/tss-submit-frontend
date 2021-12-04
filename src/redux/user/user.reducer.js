import { combineReducers } from "redux";
import * as constants from "./user.constant";
import { constants as loadingConstants } from "redux/loading";

const initialState = {
  responseGetUserInfo: null,
  responsePutUserInfo: null,
};

function userStore(state = initialState, action) {
  switch (action.type) {
    case constants.GET_USER_INFO:
      return {
        ...state,
        isLoadingGetUserInfo: true,
      };
    case constants.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoadingGetUserInfo: false,
        responseGetUserInfo: action?.payload,
      };
    case constants.GET_USER_INFO_FAIL:
      return {
        ...state,
        isLoadingGetUserInfo: false,
        responseGetUserInfo: action?.payload,
      };
    case constants.PUT_USER_INFO:
      return {
        ...state,
        isLoadingPutUserInfo: true,
      };
    case constants.PUT_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoadingPutUserInfo: false,
        responsePutUserInfo: action?.payload,
      };
    case constants.PUT_USER_INFO_FAIL:
      return {
        ...state,
        isLoadingPutUserInfo: false,
        responsePutUserInfo: action?.payload,
      };
    case loadingConstants.ERROR_401:
    default:
      return state;
  }
}

export default combineReducers({ userStore });
