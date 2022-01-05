import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, Divider } from '@mui/material';

function Profile(props) {
    const { children, value, index, ...other } = props;
    const defaultValues = {
        user: "",
    };

    const [formValues, setFormValues] = useState(defaultValues)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const formStyle = {
        maxWidth: "390px",
        width: "100%",
    }

    const buttonStyle = {
        fontWeight: "600",
        fontSize: "16px",
        lineHeight: "19px",
        color: "#FFFFFF",
        width: "auto",
        padding: "12px 24px",
        background: "#446DFF",
        borderRadius: "8px",
        boxShadow: "none",
        marginTop: "auto",
        textTransform: "inherit",
    }

    return (
        <Box hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}>
            <Box sx={formStyle}>
                <FormControl className="form-control mb-16">
                    <FormLabel>Địa chỉ email của bạn</FormLabel>
                    <OutlinedInput
                        id="user"
                        name="user"
                        type="email"
                        placeholder="Địa chỉ email của bạn"
                        value={formValues.user}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Tên của bạn</FormLabel>
                    <OutlinedInput
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Tên của bạn"
                        value={formValues.name}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Số điện thoại</FormLabel>
                    <OutlinedInput
                        id="tel"
                        name="tel"
                        type="tel"
                        placeholder="Số điện thoại"
                        value={formValues.phone}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <Divider sx={{ margin: "14px 0 !important" }} />
                <FormControl className="form-control mb-16">
                    <FormLabel>Mật khẩu hiện tại</FormLabel>
                    <OutlinedInput
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={formValues.password}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Mật khẩu mới</FormLabel>
                    <OutlinedInput
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        placeholder="Password"
                        value={formValues.newPassword}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Xác nhận mật khẩu mới</FormLabel>
                    <OutlinedInput
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        value={formValues.confirmPassword}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <Button sx={buttonStyle} variant="contained" type="submit">
                    Cập nhật
                </Button>
            </Box>
        </Box>
    );
}

export default Profile;