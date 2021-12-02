import React, {useState, useEffect} from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {postAccountLogin} from 'redux/account/account.action'
import { getUserInfo } from 'redux/user/user.action';
import Notify from 'components/custom/Notify';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function HomeScreen(props) {
    const accountStore = useAppSelector(state => state?.rootReducer?.accountReducers?.accountStore ?? 'default');     
    const userStore = useAppSelector(state => state?.rootReducer?.userReducers?.userStore ?? 'default');     
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postAccountLogin({username: 'admin', password: '1234567'}))
    }, [])

    return (
        <Box>
            <Box sx={{
                width: '100%',
                height: 300,
                backgroundImage: `url("/assets/images/bg-hero.png")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }} />
            <Box sx={{
                    width: '90%',
                    margin: '-105px auto 0',
                    background: '#FFFFFF',
                    boxShadow: '0px 4px 17px rgb(0 0 0 / 5%)',
                    borderRadius: '24px',
                    padding: '50px 98px',
                    boxSizing: 'border-box',
            }}>
                <Box>
                    <h2 className="main-title mb-2">HỘI ĐỒNG XÁC THỰC TSS</h2>
                    <p className="main-cotain">TSS có tất cả các tính năng nổi bật của một hệ thống chuỗi khối điển hình, tính minh bạch và bảo mật. Thông tin do người dùng gửi vào hệ thống TSS sẽ được bảo vệ an toàn, toàn diện trước sự tấn công của tin tặc và có khả năng khôi phục hoàn toàn trong trường hợp xảy ra sự cố phá hủy. Thông tin người dùng sẽ được quản lý một cách chuyên nghiệp và dễ sử dụng. TSS áp dụng công nghệ blockchain vào quản lý kinh doanh bằng cách gửi thông tin dự án đến với TSS để dự án của bạn có thể hoạt động dựa trên nền tảng của chúng tôi.</p>
                </Box>
            </Box>
        </Box>
    )   
}

export default HomeScreen;