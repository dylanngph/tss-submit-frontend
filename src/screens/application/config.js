import uuid from 'uuid';

export const projectData = {
    incorporationName: "",
    incorporationAddress: "",
    ownerAddress: "",
    transactionName: "",
    transactionAddress: "",
    businessAreas: [],
    companyCode: "",
    taxCode: "",
    acceptDate: null,
    businessLicense: null,
    ownerAddress: "",

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
    tokenAllocations: [
        { id: uuid(), allocationName: '', rate: null, price: null, amount: null, vesting: '5% unlock at TGE, 90-days cliff, 6% monthly' },
        { id: uuid(), allocationName: '', rate: null, price: null, amount: null, vesting: '5% unlock at TGE, 90-days cliff, 6% monthly' },
        { id: uuid(), allocationName: '', rate: null, price: null, amount: null, vesting: '5% unlock at TGE, 90-days cliff, 6% monthly' },
    ],

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