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
    developmentTeam: [
        { id: uuid(), image: [], name: '', position: '' },
        { id: uuid(), image: [], name: '', position: '' },
        { id: uuid(), image: [], name: '', position: '' },
    ],
    developmentPartner: [
        { id: uuid(), image: [], name: '', website: '' },
        { id: uuid(), image: [], name: '', website: '' },
        { id: uuid(), image: [], name: '', website: '' },
    ],
    description: "",
    websites: [''],
    socialWebs: [
        {
            name: '',
            link: '',
        }
    ],

    tokenName: "",
    symbol: "",
    communications: [],
    standards: [],
    smartContractAddress: "",

    name: "",
    dob: "",
    position: "",
    frontIdImage: "",
    backIdImage: "",
    address: "",
    phone: "",
    email: "",
    idAuth: "",
    idType: "",
}