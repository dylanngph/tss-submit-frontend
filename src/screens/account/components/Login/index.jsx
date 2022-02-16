import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, TextField, InputAdornment, IconButton } from '@mui/material';
import { Link, useHistory } from 'react-router-dom'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {postBreadcrumb} from 'redux/breadcrumb/breadcrumbs.action'
import { useAppDispatch, useAppSelector } from 'app/hooks';
import PropTypes from 'prop-types';
import axios from "axios";

function LoginAccount({setToken}) {
    const dispatch = useAppDispatch();
    let history = useHistory();

    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    })

    const [errorsState, setErrorsState] = useState(false);
    const [stateErrorLogin, setStateErrorLogin] = useState(false);

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setErrorsState(true);
    }

    const handleSubmit = async (event) => {
        setStateErrorLogin(false);
        try {
            event.preventDefault();
            const res = await axios.post(`${process.env.REACT_APP_URL_API}/auth/sign-in`, values);
            if(res.data) {
                setToken(res.data.data.accessToken);
                history.push('/')
            }
        } catch (error) {
            setStateErrorLogin(true);
        }
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

    useEffect(() => {
        dispatch(postBreadcrumb([
            {
                'label': '',
            },
        ]))
    }, [])

    return (
        <Box sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 15px",
        }}>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="main-title mb-2 text-center">Đăng nhập</h2>
                <FormControl className="form-control mb-16">
                    <FormLabel>Tên đăng nhập</FormLabel>
                    <OutlinedInput
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Tên đăng nhập"
                        value={values.email}
                        onChange={handleChange('email')}
                        error={!values.email && errorsState}
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
                        error={!values.password && errorsState}
                    />
                </FormControl>
                {/* <div className="mb-16">
                    <p className="text-right">
                        <Link to="/forgotpass" className="call-to-action" underline="none">Quên mật khẩu</Link>
                    </p>
                </div> */}
                {
                    (!values.password || !values.email) &&
                    <Button variant="contained" className="button mb-16" type="submit" disabled>
                        Đăng nhập
                    </Button>
                }
                {
                    (values.password && values.email) &&
                    <Button variant="contained" className="button mb-16" type="submit">
                        Đăng nhập
                    </Button>
                }
                <p className="text-center">
                    <Link to="/register" className="call-to-action" underline="none">Tạo tài khoản mới</Link>
                </p>
                {
                    stateErrorLogin &&
                    <Box sx={{color: '#e74c3c', textAlign: 'center', marginTop: '10px'}}>Đăng nhập không thành công, tên đăng nhập hoặc mật khẩu không đúng</Box>
                }
            </form>
        </Box>
    )
}

export default LoginAccount;

LoginAccount.propTypes = {
    setToken: PropTypes.func.isRequired
};
