import * as constants from './product.constant';

const initialState = {
    incorporation: {
        incorporationName: "",
        incorporationAddress: "",
        transactionName: "",
        transactionAddress: "",
        businessAreas: 1,
        companyCode: "",
        taxCode: "",
        acceptDate: React.useState(new Date('2014-08-18T21:11:54')),
        businessLicense: "",
    },
};

export default function loading(state = initialState, action) {
    switch (action.type) {
        case constants.ACCOUNT_REGISTER:
          return {
            ...state,
            isLoadingRegister: true,
          };
        case constants.ACCOUNT_REGISTER_SUCCESS:
          return {
            ...state,
            isLoadingRegister: false,
            responseRegister: action?.payload,
          };
    
        case constants.ACCOUNT_REGISTER_FAIL:
          return {
            ...state,
            isLoadingRegister: false,
            responseRegister: action?.payload,
          };
    
        case constants.ACCOUNT_LOGIN:
          console.log("Dispatch no api: ", JSON.stringify(action?.payload));
          return {
            ...state,
            isLoadingLogin: true,
          };
        default:
          return state;
      }
}