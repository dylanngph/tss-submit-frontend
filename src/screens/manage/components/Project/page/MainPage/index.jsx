import Information from 'components/custom/Information';
import { Box, CircularProgress, Button } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import useToken from 'components/hook/useToken';
import { postBreadcrumb } from 'redux/breadcrumb/breadcrumbs.action'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import EmptyPage from '../EmptyPage'

function MainPage(props) {
    const { token, setToken } = useToken();
    const [loading, setLoading] = useState(true);
    const [projectItem, setProjectItem] = useState({});
    const dispatch = useAppDispatch();

    useEffect(async () => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL_API}/project/user`, { headers: { "Authorization": `Bearer ${token}` } });
            setProjectItem(res.data.data);
            dispatch(postBreadcrumb([
                {
                    'label': res.data.data ? res.data.data.projectName : '',
                },
            ]))
            setLoading(false);
        } catch (e) {}
    };

    const handleUpdateData = async () => {
        try {
            // const res = await axios.post(`${process.env.REACT_APP_URL_API}/project/application/bussiness/change`, projectItem,  { headers: {"Authorization" : `Bearer ${token}`} });
            // if (res.data) {
            //     console.log('res===>', res);
            // }
        } catch (error) {}
    }

    return (
        <Box sx={{ padding: "24px" }}>
            {
                !loading ?
                    <>
                        {
                            projectItem ?
                            <Information project={projectItem} stateEdit={true} />
                            :
                            <EmptyPage />
                        }
                    </>

                    :
                    <CircularProgress />
            }
        </Box>
    );
}

const ButtonUpdate = styled(Button)`
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
    width: 100%;
    padding: 12px;
    background: #446DFF;
    border-radius: 8px;
    box-shadow: none;
    margin-top: auto;
    text-transform: inherit;
    width: 200px;
    margin-bottom: 20px;
    &:hover {
        color: #FFFFFF;
        background: #446DFF;
    }
`;

export default MainPage;