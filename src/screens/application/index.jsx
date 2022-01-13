import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useAppDispatch } from 'app/hooks';
import {postBreadcrumb} from 'redux/breadcrumb/breadcrumbs.action'
import { Box, Typography, Tabs, Tab, Stepper, Step, StepLabel, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Incorporation from '../../components/display/Incorporation';
import Project from '../../components/display/Project';
import Tokenomics from '../../components/display/Tokenomics';
import LegalRepresentative from '../../components/display/LegalRepresentative';
import Information from 'components/custom/Information';
import ConfirmDenial from '../../components/modals/ConfirmDenial'
import { projectData } from './config';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import useToken from 'components/hook/useToken';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>{children}</Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const STEPS = [
    'Thông tin tổ chức',
    'Thông tin dự án',
    'Thông tin Tokenomic',
    'Đại diện pháp luật'
]

function Application(props) {
    let history = useHistory();
    const [value, setValue] = React.useState(0);
    const [loadingButton, setLoadingButton] = React.useState(false);
    const [stateNextBtn, setStateNextButton] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [showPreview, setShowPreview]  = React.useState(false);
    const dispatch = useAppDispatch();
    const {token, setToken} = useToken();
    const [listBase64, setListBase64] = React.useState({
        businessLicense: "",
        logo: "",
        whitepaper: "",
        backIdImage: "",
        frontIdImage: "",
    });
    const [projectItem, setProjectItem] = useState(projectData);
    const [openModel, setopenModel] = useState(false);

    const setProjectItemStep = (data) => {
        setProjectItem(data);
    }

    useEffect(() => {
        dispatch(postBreadcrumb([
            {
                'label': 'Đăng ký dự án',
            },
            {
                'label': 'Doanh nghiệp',
            }
        ]))
    }, [])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep >= STEPS.length - 1) {
            setShowPreview(true);
        } else {
            setValue((prevActiveStep) => prevActiveStep + 1);
            setStateNextButton(false);
        }

        const ARR_LIST_KEY_FILE = ["businessLicense", "logo", "whitepaper", "backIdImage", "frontIdImage"];
        // convert all file to base64
        ARR_LIST_KEY_FILE.map((key) => {
            if (!projectItem[key] || listBase64[key]) return;
            let file = projectItem[key];
            convertFile(file)
            .then(res => {
                setListBase64({
                    ...listBase64,
                    [key]: res
                });
            })
            .catch(error => console.log(error));
        });
        
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setValue((prevActiveStep) => prevActiveStep - 1);
    };

    const handleBackFromPreview = () => {
        setActiveStep(STEPS.length - 1);
        setShowPreview(false);
    }

    const handlePostForm = async () => {
        let projectForm = verifyObjectProject(projectItem);
        setLoadingButton(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL_API}/project/application/bussiness`, projectForm,  { headers: {"Authorization" : `Bearer ${token}`} });
            setLoadingButton(false);
            if (response && response.data) {
                setopenModel(true);
                console.log('open application==>', openModel);
            }
        } catch (error) {
            setLoadingButton(false);
        }
    }

    const handleCloseModal = () => {
        setopenModel(false);
        history.push('/manage');
    }

    const verifyObjectProject = (data) => {
        let tpmProject = data;
        const ARR_LIST_KEY_FILE = ["businessLicense", "logo", "whitepaper", "backIdImage", "frontIdImage"];
        const KEY_ACCEPT_DATE = "acceptDate";

        // convert all file to base64
        ARR_LIST_KEY_FILE.map((key) => {
            tpmProject[key] = listBase64[key];
        });

        // businessAreas
        let tpmBusinessAreas = [];
        tpmProject.businessAreas.map((item) => {
            tpmBusinessAreas.push(item.area)
        })
        tpmProject.businessAreas = tpmBusinessAreas;

        // companyCode, taxCode
        tpmProject.companyCode = parseInt(tpmProject.companyCode);
        tpmProject.taxCode = parseInt(tpmProject.taxCode);

        // date to string
        tpmProject[KEY_ACCEPT_DATE] = convertDateToString(tpmProject[KEY_ACCEPT_DATE]);

        // communications, standards
        let tpmCommunications = [];
        tpmProject.communications.map((item) => {
            tpmCommunications.push(item.name)
        })
        tpmProject.communications = tpmCommunications;
        let tpmStandards = [];
        tpmProject.standards.map((item) => {
            tpmStandards.push(item.name)
        })
        tpmProject.standards = tpmStandards;

        // tokenAllocations
        let listTokenAllocations = [];
        tpmProject.tokenAllocations.map((item) => {
            if (item.allocationName && item.price && item.amount && item.rate && item.vesting) {
                item.rate = parseInt(item.rate / 100);
                item.price = parseInt(item.price);
                item.amount = parseInt(item.amount);
                listTokenAllocations.push(item);
            }
        });
        tpmProject.tokenAllocations = listTokenAllocations;

        // developmentTeam, developmentPartner
        let listDevelopmentTeam = [];
        tpmProject.developmentTeam.map((item) => {
            if (item.image[0] && item.name && item.position) {
                item.image = item.image[0].data_url;
                listDevelopmentTeam.push(item);
            }
        })
        tpmProject.developmentTeam = listDevelopmentTeam;
        let listDevelopmentPartner = [];
        tpmProject.developmentPartner.map((item) => {
            if (item.image[0] && item.name && item.website) {
                item.image = item.image[0].data_url;
                listDevelopmentPartner.push(item);
            }
        })
        tpmProject.developmentPartner = listDevelopmentPartner;

        // process legalRepresentative
        tpmProject.legalRepresentative = {
            name: tpmProject.name,
            dob: convertDateToString(tpmProject.dob),
            position: tpmProject.position,
            identity: {
                idType: tpmProject.idType,
                id: tpmProject.idAuth
            },
            frontIdImage: listBase64.frontIdImage,
            backIdImage: listBase64.backIdImage,
            address: tpmProject.address,
            phone: tpmProject.phone,
            email: tpmProject.email
        }
        return tpmProject;
    }
    
    const convertDateToString = (date) => {
        if (!date) return;
        return date.toISOString().slice(0, 10);
    };

    const convertFile = async (props) => {
        const blobToBase64 = (blob) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(blob);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            })
        const toBase64 = await blobToBase64(props).then((data) => data);
        return toBase64?.toString();
    }
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const wrapStepper = {
        position: 'absolute',
        background: '#F6F8FA',
        borderRadius: '12px',
        maxWidth: '263px',
        width: '100%',
        top: '165px',
        padding: '24px 19px',
        right: '48px',
    }

    const wrapButtonFooter = {
        display: 'flex',
        position: 'fixed',
        bottom: 0,
        width: 'calc(100% - 244px)',
        background: '#FFFFFF',
        padding: '24px',
        justifyContent: 'end',
        zIndex: 11,
    }

    return (
        <Box sx={{ position: 'relative' }}>
            {
                !showPreview ?
                <>
                    <Box mb={5} sx={{ padding: "24px" }}>
                        <Box>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab disabled className="tab-title" label="Tổ chức" {...a11yProps(0)}/>
                                <Tab disabled className="tab-title" label="Dự án" {...a11yProps(1)} />
                                <Tab disabled className="tab-title" label="Tokenomics" {...a11yProps(2)} />
                                <Tab disabled className="tab-title" label="Đại diện pháp luật" {...a11yProps(3)} />
                            </Tabs>
                        </Box>
                        <Box sx={{ background: "#FFFFFF", borderRadius: '12px 12px 0px 0px', padding: "24px 36px" }}>
                            <TabPanel value={value} index={0}>
                                <Incorporation projectItem={projectItem} setProjectItemStep={setProjectItemStep}/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Project projectItem={projectItem} setProjectItemStep={setProjectItemStep} stateNextBtn={stateNextBtn} setStateNextButton={setStateNextButton} />
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Tokenomics projectItem={projectItem} setProjectItemStep={setProjectItemStep} stateNextBtn={stateNextBtn} setStateNextButton={setStateNextButton} />
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <LegalRepresentative projectItem={projectItem} setProjectItemStep={setProjectItemStep} stateNextBtn={stateNextBtn} setStateNextButton={setStateNextButton} />
                            </TabPanel>
                        </Box>
                    </Box>
                    <Box sx={wrapStepper}>
                        <Typography mb={1} variant='h5'>Tạo hồ sơ dự án</Typography>
                        <Stepper sx={{ paddingLeft: '10px' }} activeStep={activeStep} orientation="vertical">
                            {STEPS.map((step) => (
                                <Step key={step}>
                                    <StepLabel>
                                        <Typography variant='h6'>
                                            {step}
                                        </Typography>
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <Typography mt={3} mb={1} variant='h5'>Xem xét dự án</Typography>
                        <Stepper className="project-review" sx={{ paddingLeft: '10px' }} activeStep={activeStep + 1} orientation="vertical">
                            <Step key="vertical">
                                <StepLabel>
                                    <Typography variant='h6'>
                                        Chúng tôi sẽ xem xét dự án và phản hồi thông qua email đăng ký
                                    </Typography>
                                </StepLabel>
                            </Step>
                        </Stepper>
                    </Box>
                    <Box sx={wrapButtonFooter}>
                        {activeStep != 0 ?
                            <Box sx={{ width: '212px' }} mr={2}>
                                <Button onClick={handleBack} variant="contained" className="button back-button" type="submit">
                                    Trở lại
                                </Button>
                            </Box>
                            :
                            null}
                        <Box sx={{ width: '212px' }}>
                            <Button onClick={handleNext} variant="contained" className="button" type="submit">
                                Tiếp tục
                            </Button>
                        </Box>
                    </Box>
                </>
                :
                <>
                    <Box sx={{padding: "24px 24px 100px"}}>
                        <Information project={projectItem} stateEdit={false} />
                    </Box>
                    <Box sx={wrapButtonFooter}>
                        {activeStep != 0 ?
                            <Box sx={{ width: '212px' }} mr={2}>
                                <Button onClick={handleBackFromPreview} variant="contained" className="button back-button" type="submit">
                                    Trở lại
                                </Button>
                            </Box>
                            :
                            null}
                        <Box sx={{ width: '212px' }}>
                            {
                                !loadingButton ?
                                <Button onClick={handlePostForm} variant="contained" className="button" type="submit">
                                    Gửi
                                </Button>
                                :
                                <LoadingButton loading variant="outlined" sx={{width: '100%', height: '43px', backgroundColor: '#446DFF'}}>
                                    Submit
                                </LoadingButton>
                            }
                            
                            
                        </Box>
                    </Box>
                    <ConfirmDenial handleCloseModal={handleCloseModal} open={openModel} />
                </>
            }
        </Box>
    )
}

export default Application;