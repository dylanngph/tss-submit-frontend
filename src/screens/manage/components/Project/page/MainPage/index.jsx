import Information from 'components/custom/Information';
import { Box, CircularProgress } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import useToken from 'components/hook/useToken';
import {postBreadcrumb} from 'redux/breadcrumb/breadcrumbs.action'
import { useState, useEffect } from 'react';
import axios from 'axios';

function MainPage(props) {
    const {token, setToken} = useToken();
    const [loading, setLoading] = useState(true);
    const [projectItem, setProjectItem] = useState({});
    const dispatch = useAppDispatch();

    useEffect(async () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const res = await axios.get('https://dev-api.tss.org.vn/project/user', { headers: {"Authorization" : `Bearer ${token}`}});
        setProjectItem(res.data.data);
        dispatch(postBreadcrumb([
            {
                'label': res.data.data ? res.data.data.projectName : '',
            },
        ]))
        setLoading(false);
    };

    return (
        <Box sx={{padding: "24px"}}>
            {
                !loading ?
                <Information project={projectItem} />
                :
                <CircularProgress />
            }
        </Box>
    );
}

export default MainPage;