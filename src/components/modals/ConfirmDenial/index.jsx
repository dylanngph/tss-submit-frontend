import React, { useState } from "react";
import { Box, Button, Modal, Typography, FormControl, Select, MenuItem, TextField } from '@mui/material';


const ConfirmDenial = ({ handleCloseModal, open }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: '120px 32px',
        width: "100%",
        maxWidth: "846px",
        boxShadow: "0px 4px 17px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        border: "1px solid #ffffff",
    };

    const contentWrap = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        maxWidth: "545px",
        width: "100%",
        margin: "auto"
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box mb={3} sx={{ textAlign: "center" }}>
                        <img className="icon-history" src="/assets/icons/forbidden.svg" alt="forbidden" />
                    </Box>
                    <Typography align="center" mb={2} variant="h4">Hồ sơ đăng ký hoàn tất</Typography>
                    <Typography align="center" mb={3} variant="body1">Chúng tôi đã nhận được hồ sơ đăng ký của bạn. Chúng tôi sẽ xem xét và phản hồi bạn trong thời gian sớm nhất.</Typography>
                    <Box sx={contentWrap}>
                        <Button className="button disable" onClick={handleCloseModal}>Đã hiểu</Button>
                    </Box>

                </Box>
            </Modal>
        </div>
    )
}

export default ConfirmDenial;