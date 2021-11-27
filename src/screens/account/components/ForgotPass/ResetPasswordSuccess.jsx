import React, { useState } from "react";
import ResultAnnouncement from '../../../../components/custom/Notifications/ResultAnnouncement';

const ResetPasswordSuccess = () => {
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
        <ResultAnnouncement icon="/assets/icons/success.svg"
        title="Chúng tôi đã gửi cho bạn một email khôi phục"
        content="Chúng tôi đã gửi email tới your-email@gmail.com kèm theo liên kết để khôi phục tài khoản của bạn. Làm theo hướng dẫn để khôi phục tài khoản." />
    )
}

export default ResetPasswordSuccess;