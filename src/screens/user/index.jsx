import React, {useState, useEffect} from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import {postBreadcrumb} from 'redux/breadcrumb/breadcrumbs.action'
import Activity from '../../components/display/Activity';
import Profile from '../../components/display/Profile'
import History from '../../components/custom/History'
import { useAppDispatch } from 'app/hooks';
import Cookies from 'js-cookie'
import axios from 'axios';
import useToken from 'components/hook/useToken';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function User(props) {
    const [value, setValue] = React.useState(0);
    const {token, setToken} = useToken();
    const [email, setEmail] = React.useState('');
    const [data, setData] = React.useState();
    const dispatch = useAppDispatch();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const readCookies = () => {
        const userCookies = Cookies.get("email");
        setEmail({
            ["email"]: userCookies,
        });
      }

    useEffect(() => {
        dispatch(postBreadcrumb([
            {
                'label': email,
            },
        ]))
        readCookies();
        getUserInfor();
    }, [])

    const getUserInfor = async () => {
        try {
            const response = await axios.get("https://dev-api.tss.org.vn/user/me", { headers: {"Authorization" : `Bearer ${token}`} });
            if (response.data) {
                setData(response.data.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box>
            <Box sx={{ padding: "24px" }}>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className="tab-title" label="Hồ sơ" {...a11yProps(0)} />
                        {/* <Tab className="tab-title" label="Hoạt động" {...a11yProps(1)} /> */}
                    </Tabs>
                </Box>
                <Box className={`simple-tabpanel-${value}`} sx={{ background: "#FFFFFF", borderRadius: '12px 12px 0px 0px', padding: "24px 36px" }}>
                    <Profile token={token} data={data} value={value} index={0} />
                    {/* <Activity value={value} index={1} /> */}
                </Box>
            </Box>
            <History />
        </Box>
    );
}

export default User;