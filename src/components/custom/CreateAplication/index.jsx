import React, { useState } from "react";
import { Box, Button, Modal, Typography, Divider } from '@mui/material';
import CountrySelect from '../Button/CountrySelect';
import { Link } from 'react-router-dom'


const CreateAplication = (props) => {
    const defaultValues = {
        appType: 1,
        country: ''
    };

    let data = [
        {
            label: "Doanh nghiệp",
            icon: "/assets/icons/company.svg",
            iconActive: "/assets/icons/active/company.svg",
        },
        {
            label: "Cá nhân",
            icon: "/assets/icons/personnal.svg",
            iconActive: "/assets/icons/active/personnal.svg",
        },
        {
            label: "Quỹ đầu tư",
            icon: "/assets/icons/people.svg",
            iconActive: "/assets/icons/active/people.svg",
        }
    ]

    const [activeStep, setActiveStep] = useState(0);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [formValues, setFormValues] = useState(defaultValues)

    const handleClose = () => {
        setActiveStep(0)
        setOpen(false)
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    // const isStepOptional = (step) => {
    //     return step === 1;
    // };

    // const handleReset = () => {
    //     setActiveStep(0);
    // };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSelectType = (type) => {
        setFormValues({
            ...formValues,
            ['appType']: type,
        });
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        p: 4,
        width: "100%",
        maxWidth: "846px",
        boxShadow: "0px 4px 17px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        border: "1px solid #ffffff",
    };

    const appItem = {
        background: "#EFF2F5",
        border: "1.5px solid #EFF2F5",
        boxSizing: "border-box",
        borderRadius: "12px",
        display: "flex",
        padding: "12px 16px",
        alignItems: "center",
        pointerEvents: 'none',
    }

    const appItemActive = {
        background: "#FFFFFF",
        border: "1.5px solid #446DFF",
        boxSizing: "border-box",
        borderRadius: "12px",
        display: "flex",
        padding: "12px 16px",
        alignItems: "center",
    }

    // const appItemDisable = {
    //     background: "#EFF2F5",
    //     width: "56px",
    //     height: "56px",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     borderRadius: "50%",
    //     pointerEvents: 'none',
    // }

    const iconAppItem = {
        background: "#EFF2F5",
        width: "56px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
    }

    const smallTitle = {
        color: "#A6B0C3",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "22px",
    }

    const smallTitleActive = {
        color: "#446DFF",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "22px",
    }

    return (
        <div>
            <Button className="button" onClick={handleOpen}>Tạo hồ sơ</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {activeStep === 0 ? 
                        <React.Fragment>
                            <Box className="wrapper-icon-title" sx={{display: 'flex', flexDirection: 'row'}}>
                                <div onClick={handleClose} className="icon-call-to-action-relative">
                                    <img src="/assets/icons/close.svg" alt="close" />
                                </div>
                                <Typography className="small-title ms-16">Chọn hình thức đăng ký</Typography>
                            </Box>
                            <Divider sx={{margin: "23px 0 37px !important"}} />
                            <Box sx={{maxWidth:"430px", margin: "auto",}}>
                                {data.map((item, index) => (
                                    <Box key={index} className="mb-16" onClick={() => handleSelectType(index + 1)} sx={formValues.appType === (index + 1) ? appItemActive : appItem}>
                                        <Box sx={iconAppItem}>
                                            <img src={formValues.appType === (index + 1) ? item.iconActive : item.icon}
                                                alt="company" />
                                        </Box>
                                        <Typography sx={formValues.appType === (index + 1) ? smallTitleActive : smallTitle} className="ms-24">
                                            {item.label}
                                        </Typography>
                                        {formValues.appType === (index + 1) ? <img className="ms-auto" src="/assets/icons/check-done.svg" alt="check done" /> : null }
                                    </Box>
                                ))}
                                <Button className="button" onClick={handleNext}>Tiếp tục</Button>
                            </Box>
                        </React.Fragment>
                    : 
                        <React.Fragment>
                            <Box className="wrapper-icon-title" sx={{display: 'flex', flexDirection: 'row'}}>
                                <div onClick={handleBack} className="icon-call-to-action-relative">
                                    <img src="/assets/icons/back.svg" alt="close" />
                                </div>
                                <Typography className="small-title ms-16">Lựa chọn quốc gia</Typography>
                            </Box>
                            <Divider sx={{margin: "14px 0 !important"}} />
                            <Box sx={{maxWidth:"430px", margin: "auto",}}>
                                <CountrySelect className="mb-16" />
                                {/* <Button className="button" onClick={handleNext}>Bắt đầu</Button> */}
                                <Link className="button w-100" to="/application" onClick={handleClose}>Bắt đầu</Link>
                            </Box>
                        </React.Fragment>
                    }
                </Box>
            </Modal>
        </div>
    )
}

export default CreateAplication;