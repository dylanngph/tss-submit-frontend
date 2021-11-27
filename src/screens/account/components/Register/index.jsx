import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput } from '@mui/material';
import { Link } from 'react-router-dom'

function RegisterAccount(props) {
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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
    };

    return (
        <Box sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="wrapper-icon-title mb-36">
                    <Link className="icon-call-to-action" to='/' underline="none">
                        <img props src="/assets/icons/back.svg" alt='arrow' />
                    </Link>
                    <h2 className="main-title mb-2 text-center">Tạo tài khoản mới</h2>
                </div>
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
                <FormControl className="form-control mb-16">
                    <FormLabel>Mật khẩu</FormLabel>
                    <OutlinedInput
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Mật khẩu"
                        value={formValues.password}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Xác nhận mật khẩu</FormLabel>
                    <OutlinedInput
                        id="retypePassword"
                        name="retypePassword"
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        value={formValues.retypePassword}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <Button variant="contained" className="button mb-16" type="submit">
                    Tiếp tục
                </Button>
                <p className="text-center">
                    <Link to="/login" className="call-to-action" underline="none">Đã có tài khoản</Link>
                </p>
            </form>
        </Box>
    );
}

export default RegisterAccount;