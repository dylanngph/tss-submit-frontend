import React, { useState, useEffect } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, Select, MenuItem, FormHelperText } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { Link, useHistory } from 'react-router-dom'
import axios from "axios";

function SecurityQuestion(props) {
    const registerStore = useAppSelector(state => state?.rootReducer?.accountReducers?.accountStore?.registerData ?? 'default');
    let history = useHistory();

    const defaultValues = {
        question1: "",
        answer1: "",
        question2: "",
        answer2: "",
    };

    let questions = [
        {
            value: '1',
            question: "Thú nuôi của bạn tên là gì?",
        },
        {
            value: '2',
            question: "Bố và mẹ bạn gặp nhau lần đầu tiên ở đâu?",
        },
        {
            value: '3',
            question: "Tên người bạn thân thời bé của bạn?",
        },
        {
            value: '4',
            question: "Công việc mơ ước của bạn là gì?",
        },
        {
            value: '5',
            question: "Biệt danh của bạn thời đi học là gì?",
        },
        {
            value: '6',
            question: "Món ăn ưa thích của bạn là gì?",
        },
    ]

    const [formValues, setFormValues] = useState(defaultValues);
    const [errorsState, setErrorsState] = useState(false);
    const [stateBtnRegister, setStateBtnRegister] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleInputFocus = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'answer1':
                setErrorsState({
                    ...errorsState,
                    question1: formValues.question1 ? false : true,
                });
                break;
            case 'answer2':
                setErrorsState({
                    ...errorsState,
                    question2: formValues.question2 ? false : true,
                });
                break;
            default:
                break;
        }
        if (formValues.question1 === formValues.question2) {
            setErrorsState({
                ...errorsState,
                [name]: true,
            });
        }
        handleStateBtnRegister();
    };

    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        if (formValues.question1 === formValues.question2) {
            setErrorsState({
                ...errorsState,
                [name]: true,
            });
            handleStateBtnRegister();
            return;
        }
        setErrorsState({
            ...errorsState,
            [name]: value ? false : true,
        });
        handleStateBtnRegister();
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        setErrorsState({
            ...errorsState,
            [name]: value ? false : true,
        });
        checkDuplicate(name, value);
        handleStateBtnRegister();
    };

    const handleStateBtnRegister = () => {
        if (
            formValues.question1 &&
            formValues.question2 &&
            (formValues.question1 !== formValues.question2) &&
            formValues.answer1 &&
            formValues.answer2
        ) {
            setStateBtnRegister(true);
            return;
        }
        setStateBtnRegister(false);
    };

    const checkDuplicate = (name, value) => {
        switch (name) {
            case 'question1':
                if (value === formValues.question2)
                    setErrorsState({
                        ...errorsState,
                        [name]: true,
                    });
                else
                    setErrorsState({
                        ...errorsState,
                        [name]: false,
                    });
                break;
            case 'question2':
                if (value === formValues.question1)
                    setErrorsState({
                        ...errorsState,
                        [name]: true,
                    });
                else
                    setErrorsState({
                        ...errorsState,
                        [name]: false,
                    });
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let registerData = registerStore;

            registerData.securityQuestions = [
                {
                    'id': formValues.question1,
                    'answer': formValues.answer1
                },
                {
                    'id': formValues.question2,
                    'answer': formValues.answer2
                },
            ]

            const res = await axios.post('https://dev-api.tss.org.vn/auth/sign-up', registerData);
            // if(res.data) {
            //     history.push("/register-success");
            // }
        } catch (error) {
            console.log('error===>', error);
        }
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
                    <Link className="icon-call-to-action" to='/register' underline="none">
                        <img props src="/assets/icons/back.svg" alt='arrow' />
                    </Link>
                    <h2 className="main-title mb-2 text-center">Câu hỏi bảo mật</h2>
                </div>
                <FormControl className="form-control mb-16">
                    <FormLabel>Câu hỏi bảo mật 1</FormLabel>
                    <Select
                        labelId="question1"
                        name="question1"
                        id="question1"
                        placeholder="Câu trả lời 1"
                        value={formValues.question1}
                        onChange={handleSelectChange}
                        error={errorsState.question1}
                    >
                        {questions.map((item, index) => (
                            <MenuItem value={item.value}>{item.question}</MenuItem>
                        ))}
                    </Select>
                    {
                        errorsState.question1 &&
                        <FormHelperText className="error">Câu hỏi bảo mật không được bỏ trống hoặc trùng nhau</FormHelperText>
                    }
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Câu trả lời 1</FormLabel>
                    <OutlinedInput
                        id="answer1"
                        name="answer1"
                        type="text"
                        placeholder="Câu trả lời 1"
                        value={formValues.answer1}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        error={errorsState.answer1}
                    />
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Câu hỏi bảo mật 2</FormLabel>
                    <Select
                        labelId="question2"
                        name="question2"
                        id="question2"
                        placeholder="Câu trả lời 2"
                        value={formValues.question2}
                        onChange={handleSelectChange}
                        error={errorsState.question2}
                    >
                        {questions.map((item, index) => (
                            <MenuItem value={item.value}>{item.question}</MenuItem>
                        ))}
                    </Select>
                    {
                        errorsState.question2 &&
                        <FormHelperText className="error">Câu hỏi bảo mật không được bỏ trống hoặc trùng nhau</FormHelperText>
                    }
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Câu trả lời 2</FormLabel>
                    <OutlinedInput
                        id="answer2"
                        name="answer2"
                        type="text"
                        placeholder="Câu trả lời 2"
                        value={formValues.answer2}
                        onFocus={handleInputFocus}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errorsState.answer2}
                    />
                </FormControl>
                <Button variant="contained" className="button mb-16 button-my-custom" type="submit" disabled={!stateBtnRegister}>
                    Tạo tài khoản
                </Button>
                <p className="text-center">
                    <Link to="/register" className="call-to-action" underline="none">Quay lại</Link>
                </p>
            </form>
        </Box>
    );
}

export default SecurityQuestion;