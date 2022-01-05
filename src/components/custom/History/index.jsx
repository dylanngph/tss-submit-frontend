import React, { useState } from "react";
import { Box, Button, Modal, Typography, Divider } from '@mui/material';
import CountrySelect from '../Button/CountrySelect';
import { Link } from 'react-router-dom'


const History = (props) => {
    const defaultValues = {
        appType: 1,
        country: ''
    };

    let data = [
        {
            title: "Name",
            before: "JadeLabs",
            after: "Jada Labbsss",
        },
        {
            title: "Project Logo has changed",
        },
        {
            title: "Business registration has changed",
        },
        {
            title: "Tax code",
            before: "TAXCODE123456",
            after: "TAXCODE",
        },
        {
            title: "Tax code",
            before: "TAXCODE123456",
            after: "TAXCODE",
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

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        width: "100%",
        maxWidth: "846px",
        boxShadow: "0px 4px 17px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        border: "1px solid #ffffff",
    };

    const littleTitle = {
        color: "#58667E",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "19px",
    }

    const mainTitle = {
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "29px",
        color: "#11142D",
    }

    const wrapContent = {
        maxWidth: "686px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "24px 24px 12px",
        background: "#EFF2F5",
        borderRadius: "12px",
    }

    const button = {
        background: "#446DFF",
        borderRadius: "8px",
        maxWidth: "212px",
        padding: "12px",
        width: "100%",
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "19px",
        margin: "auto",
        display: "block",
    }

    return (
        <div>
            {/* <Button className="button" onClick={handleOpen}>Tạo hồ sơ</Button> */}

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box mb={2} textAlign="center">
                        <img className="icon-history" src="/assets/icons/profile.png" alt="profile" />
                        <Typography sx={mainTitle}>Hồ sơ</Typography>
                    </Box>
                    <Box sx={wrapContent} mb={2}>
                        {data.map((item, index) => (
                            <Typography sx={littleTitle} mb={1.5}>{item.title}: {item.before} → {item.after}</Typography>
                        ))}
                    </Box>
                    <Button sx={button}>Gửi</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default History;