import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, OutlinedInput, Select, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom'

function SecurityQuestion(props) {
    const defaultValues = {
        question1: "",
        answer1: "",
        question2: "",
        answer2: "",
    };

    let questions = [
        {
            value: 1,
            question: "Thú nuôi của bạn tên là gì?",
        },
        {
            value: 2,
            question: "Bố và mẹ bạn gặp nhau lần đầu tiên ở đâu?",
        },
        {
            value: 3,
            question: "Tên người bạn thân thời bé của bạn?",
        },
        {
            value: 4,
            question: "Công việc mơ ước của bạn là gì?",
        },
        {
            value: 5,
            question: "Biệt danh của bạn thời đi học là gì?",
        },
        {
            value: 6,
            question: "Món ăn ưa thích của bạn là gì?",
        },
    ]

    const [formValues, setFormValues] = useState(defaultValues)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSelectChange = (e) => {
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
                    >
                        {questions.map((item, index) => (
                            <MenuItem value={item.value}>{item.question}</MenuItem>
                        ))}
                    </Select>
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
                    >
                        {questions.map((item, index) => (
                            <MenuItem value={item.value}>{item.question}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl className="form-control mb-16">
                    <FormLabel>Câu trả lời 1</FormLabel>
                    <OutlinedInput
                        id="answer2"
                        name="answer2"
                        type="text"
                        placeholder="Câu trả lời 2"
                        value={formValues.answer2}
                        onChange={handleInputChange}
                    />
                </FormControl>
                <Button variant="contained" className="button mb-16" type="submit">
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