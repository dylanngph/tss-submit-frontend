import callApiUser from "apis/middleware/apiUser";

const userApi = {
  getInfoAccount(args) {
    return callApiUser("get", "/account/info", args);
  },

  putInfoAccount(args) {
    return callApiUser("put", "/account/info", args);
  },
};

export default userApi;
