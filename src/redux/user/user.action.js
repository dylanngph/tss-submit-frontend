import * as constants from "./user.constant";

/** Get User Info */
export const getUserInfo = (payload, callback) => ({
    type: constants.GET_USER_INFO,
    payload,
    callback,
  });
  
  export const getUserInfoSuccess = (payload, callback) => ({
    type: constants.GET_USER_INFO_SUCCESS,
    payload,
    callback,
  });
  
  export const getUserInfoFail = (payload, callback) => ({
    type: constants.GET_USER_INFO_FAIL,
    payload,
    callback,
  });

/** Put User Info */
export const putUserInfo = (payload, callback) => ({
    type: constants.PUT_USER_INFO,
    payload,
    callback,
  });
  
  export const putUserInfoSuccess = (payload, callback) => ({
    type: constants.PUT_USER_INFO_SUCCESS,
    payload,
    callback,
  });
  
  export const putUserInfoFail = (payload, callback) => ({
    type: constants.PUT_USER_INFO_FAIL,
    payload,
    callback,
  });