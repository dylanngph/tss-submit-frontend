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
  console.log('action.type==>', action.type);
}