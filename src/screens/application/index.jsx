import React from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import Incorporation from '../../components/display/Incorporation';
import Project from '../../components/display/Project';
import Tokenomics from '../../components/display/Tokenomics';
import LegalRepresentative from '../../components/display/LegalRepresentative';
import Information from '../../components/custom/Information';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function Application(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Typography sx={{ padding: "24px", background: "#ffffff" }} className="small-title">
                <span className="color-span">Đăng ký dự án /</span> Doanh nghiệp
            </Typography>
            <Box sx={{ padding: "24px"}}>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className="tab-title" label="Tổ chức" {...a11yProps(0)} />
                        <Tab className="tab-title" label="Dự án" {...a11yProps(1)} />
                        <Tab className="tab-title" label="Tokenomics" {...a11yProps(2)} />
                        <Tab className="tab-title" label="Đại diện pháp luật" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <Box sx={{ background: "#FFFFFF", borderRadius: '12px 12px 0px 0px', padding: "24px 36px" }}>
                    <Incorporation value={value} index={0} />
                    <Project value={value} index={1} />
                    <Tokenomics value={value} index={2} />
                    <LegalRepresentative value={value} index={3} />
                </Box>
            </Box>
            <Information />
        </Box>
    )
}

export default Application;