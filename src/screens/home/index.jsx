import React, {useState, useEffect} from 'react';
import { Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {postAccountLogin} from 'redux/account/account.action'
import "react-toastify/dist/ReactToastify.css";
import {postBreadcrumb} from 'redux/breadcrumb/breadcrumbs.action'

function HomeScreen(props) {
    const accountStore = useAppSelector(state => state?.rootReducer?.accountReducers?.accountStore ?? 'default');
    const userStore = useAppSelector(state => state?.rootReducer?.userReducers?.userStore ?? 'default');     
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postAccountLogin({username: 'admin', password: '1234567'}))
        dispatch(postBreadcrumb([
            {
                'label': '',
            },
        ]))
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
                    padding: { xs: '24px 16px', md: '50px 98px' },
                    textAlign: { xs: 'center', md: 'left' },
                    boxSizing: 'border-box',
            }}>
                <Box>
                    <Typography mb={3} variant="h2">TRUNG TÂM QUẢN LÝ TÀI SẢN SỐ</Typography>
                    <p className="main-cotain">Digital Asset Management Center – gọi tắt TSS. TSS là một tổ chức khoa học công nghệ  và là đơn vị tiên phong tại Việt Nam được Nhà nước công nhận tư cách pháp nhân để làm nhiệm vụ thúc đẩy, tổ chức các hoạt động số hóa, quản lý tài sản số trong các hoạt động kinh tế theo định hướng KINH TẾ SỐ của Chính phủ.
</p>
                </Box>
            </Box>
        </Box>
    )   
}

export default HomeScreen;