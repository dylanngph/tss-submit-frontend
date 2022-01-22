import React, { useState, useEffect } from "react";
import MuiPhoneNumber from 'material-ui-phone-number';
import { Box, Button, FormControl, FormLabel, OutlinedInput, Divider, Alert } from '@mui/material';
import axios from 'axios';
import styled from 'styled-components';

function Profile(props) {
    const { token, data, children, value, index, ...other } = props;

    const [formValues, setFormValues] = useState({
        email: "",
        name: "",
        phone: "",
        currentPw: "",
        newPw: "",
        confirmNewPw: "",
    })

    const [error, setError] = useState('');

    useEffect(() => {
        initData();
    }, [data])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleInputPhoneChange = (phone) => {
        setFormValues({
            ...formValues,
            ["phone"]: phone,
        });
    };

    const initData = () => {
        setFormValues({
            ...formValues,
            ['email']: data?.email,
            ['name']: data?.name,
            ['phone']: data?.phone.replace('0', ''),
        });
    }

    const handleUpdateUserInfor = async () => {
        try {
            setError('');
            let dataValue = {};
            if (formValues.currentPw && formValues.newPw) {
                dataValue = {
                    name: formValues.name,
                    phone: formValues.phone.replace('+84', '0'),
                    currentPw: formValues.currentPw,
                    newPw: formValues.newPw,
                }
            } else {
                dataValue = {
                    name: formValues.name,
                    phone: formValues.phone.replace('+84', '0'),
                }
            }
            const response = await axios.post(`${process.env.REACT_APP_URL_API}/user/me`, dataValue,  { headers: {"Authorization" : `Bearer ${token}`} });
            if (response.data) {
                window.location.reload(false);
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            }
        }
    }

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
                        disabled
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Địa chỉ email của bạn"
                        value={formValues.email}
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
                    {/* <OutlinedInput
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Số điện thoại"
                        value={formValues.phone}
                        onChange={handleInputChange}
                    /> */}
                    <StyleMuiPhoneNumber>
                        <MuiPhoneNumber 
                            defaultCountry={'vn'} 
                            onlyCountries={['vn']}
                            value={formValues.phone}
                            onChange={handleInputPhoneChange}
                        />
                    </StyleMuiPhoneNumber>
                </FormControl>
                <Divider sx={{ margin: "14px 0 !important" }} />
                <FormControl className="form-control mb-16">
                    <FormLabel>Mật khẩu hiện tại</FormLabel>
                    <OutlinedInput
                        id="currentPw"
                        name="currentPw"
                        type="password"
                        placeholder="Password"
                        value={formValues.currentPw}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Mật khẩu mới</FormLabel>
                    <OutlinedInput
                        id="newPw"
                        name="newPw"
                        type="password"
                        placeholder="Password"
                        value={formValues.newPw}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Xác nhận mật khẩu mới</FormLabel>
                    <OutlinedInput
                        id="confirmNewPw"
                        name="confirmNewPw"
                        type="password"
                        placeholder="Confirm password"
                        value={formValues.confirmNewPw}
                        onChange={handleInputChange}
                    />
                </FormControl>
                {
                    error &&
                    <Box sx={{ marginBottom: '20px' }}>
                        <Alert severity="error">{error}</Alert>
                    </Box>
                }
                <Button onClick={handleUpdateUserInfor} sx={buttonStyle} variant="contained" type="submit">
                    Cập nhật
                </Button>
            </Box>
        </Box>
    );
}

const StyleMuiPhoneNumber = styled(Box)`
    padding: 11px 15px;
    background: #EFF2F5;
    border-radius: 5px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #58667E;
    border: 1px solid #EFF2F5;
    & .MuiInput-underline:before,
    & .MuiInput-underline:after {
        display: none;
    }
`;

export default Profile;