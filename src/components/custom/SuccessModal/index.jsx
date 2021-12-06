import React, { useState } from "react";
import { Box, Button, Modal, Typography, Divider } from '@mui/material';


const SuccessModal = (props) => {
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

    const content = {
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '17px',
        textAlign: 'center',
        color: '#58667E',
        maxWidth: '564px',
        width: '100%'
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
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <img mb={3} className="icon-history" src="/assets/icons/tick-circle.png" alt="tick-circle" />
                <Typography mb={2} sx={mainTitle}>{props.title}</Typography>
                <Typography mb={2} sx={content}>{props.content}</Typography>
                <Button onClick={handleClose} sx={button}>{props.button}</Button>
            </Box>
        </Modal>
    )
}

export default SuccessModal;