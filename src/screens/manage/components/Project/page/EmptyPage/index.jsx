import React from 'react';
import { Grid, Box, CircularProgress } from '@mui/material';
import CreateAplication from 'components/custom/CreateAplication';

function EmptyPage(props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Box><img src="/assets/images/updating.png" alt="comingsoon" /></Box>
            <Box mb={3} sx={{ color: '#A6B0C3' }}>Vui lòng tạo hồ sơ để xác thực dự án</Box>
            <CreateAplication />
        </Box>
    );
}

export default EmptyPage;