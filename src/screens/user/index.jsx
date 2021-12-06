import React from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import Activity from '../../components/display/Activity';
import Profile from '../../components/display/Profile'
import History from '../../components/custom/History'

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function User(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Typography sx={{ padding: "24px", background: "#ffffff" }} className="small-title">
                email2311@gmail.com
            </Typography>
            <Box sx={{ padding: "24px" }}>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className="tab-title" label="Hồ sơ" {...a11yProps(0)} />
                        <Tab className="tab-title" label="Hoạt động" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <Box className={`simple-tabpanel-${value}`} sx={{ background: "#FFFFFF", borderRadius: '12px 12px 0px 0px', padding: "24px 36px" }}>
                    <Profile value={value} index={0} />
                    <Activity value={value} index={1} />
                </Box>
            </Box>
            <History />
        </Box>
    );
}

export default User;