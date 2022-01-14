import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, FormHelperText } from '@mui/material';
import { postAccountRegisterData } from 'redux/account/account.action'
import { Link, useHistory } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'app/hooks';

function RegisterAccount(props) {
    let history = useHistory();
    const defaultValues = {
        email: "",
        name: "",
        phone: "",
        password: "",
        retypePassword: "",
    };

    const dispatch = useAppDispatch();
    const [formValues, setFormValues] = useState(defaultValues);
    const [errorsState, setErrorsState] = useState(false);
    const [stateBtnContinue, setStateBtnContinue] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setErrorsState({
            ...errorsState,
            [name]: value ? false : true,
        });
        setFormValues({
            ...formValues,
            [name]: value,
        });
        handleStateButtonContinue();
    };

    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        setErrorsState({
            ...errorsState,
            [name]: value ? false : true,
        });
        handleStateButtonContinue();
    };

    const handleInputBlurEmail = (e) => {
        const { name, value } = e.target;
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        setErrorsState({
            ...errorsState,
            [name]: value.match(validRegex) ? false : true,
        });
        handleStateButtonContinue();
    };

    const handleInputBlurRetypePassword = (e) => {
        const { name, value } = e.target;
        setErrorsState({
            ...errorsState,
            [name]: value === formValues.password ? false : true,
        });
        handleStateButtonContinue();
    };

    const handleStateButtonContinue = (e) => {
        if (formValues.email && formValues.name && formValues.phone && formValues.password && formValues.retypePassword) {
            const vals = Object.keys(errorsState).map(key => errorsState[key]);
            const isValid = (currentValue) => currentValue === false;
            if (vals.every(isValid)) {
                setStateBtnContinue(true);
                return;
            }
        }
        setStateBtnContinue(false);
    };

    const handleSubmit = () => {
        dispatch(postAccountRegisterData(formValues));
        history.push("/security-question");
    };

    return (
        <Box sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <form className="login-form">
                <div className="wrapper-icon-title mb-36">
                    <Link className="icon-call-to-action" to='/login' underline="none">
                        <img props src="/assets/icons/back.svg" alt='arrow' />
                    </Link>
                    <h2 className="main-title mb-2 text-center">Tạo tài khoản mới</h2>
                </div>
                <FormControl className="form-control mb-16">
                    <FormLabel>Địa chỉ email của bạn</FormLabel>
                    <OutlinedInput
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Địa chỉ email của bạn"
                        value={formValues.email}
                        onChange={handleInputChange}
                        onBlur={handleInputBlurEmail}
                        error={errorsState.user}
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
                        onBlur={handleInputBlur}
                        error={errorsState.name}
                    />
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Số điện thoại</FormLabel>
                    <OutlinedInput
                        id="phone"
                        name="phone"
                        type="number"
                        placeholder="Số điện thoại"
                        value={formValues.phone}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errorsState.phone}
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
                        onBlur={handleInputBlur}
                        error={errorsState.password}
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
                        onBlur={handleInputBlurRetypePassword}
                        error={errorsState.retypePassword}
                    />
                    {
                        errorsState.retypePassword &&
                        <FormHelperText error>Xác nhận mật khẩu không đúng</FormHelperText>
                    }
                </FormControl>
                <p className="text-center">
                    {
                        stateBtnContinue &&
                        <Button onClick={handleSubmit} className="button mb-16 buttom-example" underline="none">Tiếp tục</Button>
                    }
                    {
                        !stateBtnContinue &&
                        <Button className="button mb-16 buttom-example button-disable" underline="none">Tiếp tục</Button>
                    }

                </p>
                <p className="text-center">
                    <Link to="/login" className="call-to-action" underline="none">Đã có tài khoản</Link>
                </p>
            </form>
        </Box>
    );
}

export default RegisterAccount;