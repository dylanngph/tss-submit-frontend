import Information from 'components/custom/Information';
import { Box, CircularProgress, Button } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import useToken from 'components/hook/useToken';
import { postBreadcrumb } from 'redux/breadcrumb/breadcrumbs.action'
import { useState, useEffect } from 'react';
import axios from 'axios';

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
                                <Button onClick={handleUpdateData}>Cập nhật</Button>
                            )
                        }
                        
                        <Information project={projectItem} />
                    </>

                    :
                    <CircularProgress />
            }
        </Box>
    );
}

export default MainPage;