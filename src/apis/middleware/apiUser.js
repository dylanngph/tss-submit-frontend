import { API_USER, API_USER_VERSION } from "apis/config";
import { callApi } from "./apiRequest";

const callApiUser = (method, apiURL, args) => {
  const params = {
    method,
    baseURL: API_USER + API_USER_VERSION,
    apiURL,
    payload: { ...args },
  };
  return callApi(params);
};

export default callApiUser;
