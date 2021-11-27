import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput } from '@mui/material';
import { Link } from 'react-router-dom'

function LoginAccount(props) {
    const defaultValues = {
        user: "",
        password: "",
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
                <h2 className="main-title mb-2 text-center">Đăng nhập</h2>
                <FormControl className="form-control mb-16">
                    <FormLabel>Tên đăng nhập hoặc email</FormLabel>
                    <OutlinedInput
                        id="user"
                        name="user"
                        type="email"
                        placeholder="Username hoặc email"
                        value={formValues.user}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Mật khẩu</FormLabel>
                    <OutlinedInput
                        id="password"
                        name="password"
                        type="password"
                        placeholder="••••••••••••"
                        value={formValues.password}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <div className="mb-16">
                    <p className="text-right">
                        <Link to="/forgotpass" className="call-to-action" underline="none">Quên mật khẩu</Link>
                    </p>
                </div>
                <Button variant="contained" className="button mb-16" type="submit">
                    Đăng nhập
                </Button>
                <p className="text-center">
                    <Link to="/register" className="call-to-action" underline="none">Tạo tài khoản mới</Link>
                </p>
            </form>
        </Box>
    )
}

export default LoginAccount;