import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, TextField, InputAdornment, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

function LoginAccount({handleLogin , error}) {

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
      })

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        }

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        })
      }
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    }

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
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Username hoặc email"
                        value={values.email}
                        onChange={handleChange('email')}
                    />
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Mật khẩu</FormLabel>
                    <TextField
                        className="password-field"
                        fullWidth
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        placeholder="••••••••••••"
                        variant="outlined"
                        InputProps={{
                            endAdornment: 
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        style={{color: '#A6B0C3'}}
                                    >
                                        {values.showPassword ?  <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                          }}
                    />
                </FormControl>
                <div className="mb-16">
                    <p className="text-right">
                        <Link to="/forgotpass" className="call-to-action" underline="none">Quên mật khẩu</Link>
                    </p>
                </div>
                <Button onClick={() => handleLogin(values)} variant="contained" className="button mb-16" type="submit">
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