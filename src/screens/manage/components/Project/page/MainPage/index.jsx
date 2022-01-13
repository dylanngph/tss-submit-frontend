import Information from 'components/custom/Information';
import { Box, CircularProgress, Button } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import useToken from 'components/hook/useToken';
import { postBreadcrumb } from 'redux/breadcrumb/breadcrumbs.action'
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

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
        const res = await axios.get('https://dev-api.tss.org.vn/project/user', { headers: { "Authorization": `Bearer ${token}` } });
        setProjectItem(res.data.data);
        dispatch(postBreadcrumb([
            {
                'label': res.data.data ? res.data.data.projectName : '',
            },
        ]))
        setLoading(false);
    };

    const handleUpdateData = async () => {
        try {
            console.log('projectItem==>', projectItem);
            // const res = await axios.post("https://dev-api.tss.org.vn/project/application/bussiness", projectItem,  { headers: {"Authorization" : `Bearer ${token}`} })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Box sx={{ padding: "24px" }}>
            {
                !loading ?
                    <>
                        {
                            (
                                projectItem && projectItem.note && projectItem.note.flags &&
                                <ButtonUpdate onClick={handleUpdateData}>Cập nhật</ButtonUpdate>
                            )
                        }
                        
                        <Information project={projectItem} stateEdit={true} />
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