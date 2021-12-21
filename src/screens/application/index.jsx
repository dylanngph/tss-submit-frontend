import React from 'react';
import { Box, Typography, Tabs, Tab, Stepper, Step, StepLabel, Button } from '@mui/material';
import Incorporation from '../../components/display/Incorporation';
import Project from '../../components/display/Project';
import Tokenomics from '../../components/display/Tokenomics';
import LegalRepresentative from '../../components/display/LegalRepresentative';
import Information from '../../components/custom/Information';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function Application(props) {
    const [value, setValue] = React.useState(0);
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setValue((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setValue((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = [
        'Thông tin tổ chức',
        'Thông tin dự án',
        'Thông tin Tokenomic',
        'Đại diện pháp luật'
    ]

    const incorporation = {
        title: "Tổ chức",
        data: [
            {
                title: "Tên tổ chức",
                value: "JadeLabs",
            },
            {
                title: "Tên giao dịch",
                value: "138 Robinson Road #02-50 Singapore",
            },
            {
                title: "Trụ sở",
                value: "138 Robinson Road #02-50 Singapore",
            },
            {
                title: "Lĩnh vực kinh doanh",
                value: "Information Technology",
            },
            {
                title: "Mã số doanh nghiệp / số giấy phép thành lập",
                value: "jadelab-biz-reg.pdf",
            },
            {
                title: "Ngày cấp",
                value: "22/12/2022",
            },
            {
                title: "Tải lên giấy phép đăng ký kinh doanh",
                value: "TEXCODE123456",
            },
        ]
    }

    const handleChange = (event, newValue) => {
        console.log('newValue===>', newValue);
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
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <Typography sx={{ padding: "24px", background: "#ffffff" }} className="small-title">
                <span className="color-span">Đăng ký dự án /</span> Doanh nghiệp
            </Typography>
            <Box mb={5} sx={{ padding: "24px" }}>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab disabled className="tab-title" label="Tổ chức" {...a11yProps(0)} />
                        <Tab disabled className="tab-title" label="Dự án" {...a11yProps(1)} />
                        <Tab disabled className="tab-title" label="Tokenomics" {...a11yProps(2)} />
                        <Tab disabled className="tab-title" label="Đại diện pháp luật" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <Box sx={{ background: "#FFFFFF", borderRadius: '12px 12px 0px 0px', padding: "24px 36px" }}>
                    <Incorporation value={value} index={0} />
                    <Project value={value} index={1} />
                    <Tokenomics value={value} index={2} />
                    <LegalRepresentative value={value} index={3} />
                </Box>
            </Box>
            <Box sx={wrapStepper}>
                <Typography mb={1} variant='h5'>Tạo hồ sơ dự án</Typography>
                <Stepper sx={{ paddingLeft: '10px' }} activeStep={activeStep} orientation="vertical">
                    {steps.map((step, index) => (
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
            {/* <Box>
                <Information tilte={incorporation.title} data={incorporation.data} />
                <Information tilte={incorporation.title} data={incorporation.data} />
                <Information tilte={incorporation.title} data={incorporation.data} />
                <Information tilte={incorporation.title} data={incorporation.data} />
            </Box> */}
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
        </Box>
    )
}

export default Application;