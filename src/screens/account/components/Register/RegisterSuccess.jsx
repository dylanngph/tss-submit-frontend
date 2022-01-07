import React, { useState } from "react";
import ResultAnnouncement from '../../../../components/custom/Notifications/ResultAnnouncement';

const RegisterSuccess = () => {
    return (
        <ResultAnnouncement icon="/assets/icons/success.svg"
        title="Chúng tôi đã gửi cho bạn một email kích hoạt"
        content="Chúng tôi đã gửi email tới your-email@gmail.com kèm theo liên kết để kích hoạt tài khoản của bạn. Làm theo hướng dẫn để hoàn tất đăng ký tài khoản" />
    )
}

export default RegisterSuccess;