import callApiAccount from "apis/middleware/apiAccount";

const accountApi = {
  postLoginAccount(args) {
    return callApiAccount("post", "/account/login", args);
  },

  postRegisterAccount(args) {
    return callApiAccount("post", "/auth/sign-up", args);
  },

  postForgotPassAccount(args){
    return callApiAccount("post", "/account/forgotpass", args);
  },

};

export default accountApi;
