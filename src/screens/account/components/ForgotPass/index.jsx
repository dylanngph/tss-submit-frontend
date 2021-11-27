import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput } from '@mui/material';
import { Link } from 'react-router-dom'

function ForgotPassAccount(props) {
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
                    <Link className="icon-call-to-action" to='/login' underline="none">
                        <img props src="/assets/icons/back.svg" alt='arrow' />
                    </Link>
                    <h2 className="main-title mb-2 text-center">Khôi phục tài khoản</h2>
                </div>
                <FormControl className="form-control mb-16">
                    <FormLabel>Địa chỉ email của bạn</FormLabel>
                    <OutlinedInput
                        id="user"
                        name="user"
                        type="email"
                        placeholder="your-email@gmail.com"
                        value={formValues.user}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <Button variant="contained" className="button" type="submit">
                    Khôi phục tài khoản
                </Button>
            </form>
        </Box>
    );
}

export default ForgotPassAccount;