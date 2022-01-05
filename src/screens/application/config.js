import uuid from 'uuid';

export const projectData = {
    incorporationName: "",
    incorporationAddress: "",
    transactionName: "",
    transactionAddress: "",
    businessAreas: [],
    companyCode: "",
    taxCode: "",
    acceptDate: null,
    businessLicense: null,

    projectName: "",
    logo: "",
    whitepaper: "",
    devTeam: [
        { id: uuid(), avatar: [], name: '', position: '' },
        { id: uuid(), avatar: [], name: '', position: '' },
        { id: uuid(), avatar: [], name: '', position: '' },
    ],
    partners: [
        { id: uuid(), imgPartner: [], name: '', website: '' },
        { id: uuid(), imgPartner: [], name: '', website: '' },
        { id: uuid(), imgPartner: [], name: '', website: '' },
    ],
    description: "",
    websites: [''],
    socialMedias: [
        {
            type: '',
            link: '',
        }
    ],

    tokenName: "",
    symbol: "",
    communications: [],
    standards: [],
    smartContractAddress: "",

    name: "",
    position: "",
    cmndBefore: "",
    cmndAfter: "",
    address: "",
    phone: "",
    email: "",
    idAuth: "",
    idType: "",
}