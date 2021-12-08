
import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from 'components/display/NotFound';
import MainPage from './page/MainPage';
import DetailPage from './page/DetailPage';
import { Box, Typography, Tabs, Tab } from '@mui/material';

function ProjectManage(props) {
    const match = useRouteMatch();
    return (
        <Box>
            <Typography sx={{ padding: "24px", background: "#ffffff" }} className="small-title">
                Jadelabs
            </Typography>
           <Switch>
                <Route path={match.url} exact component={MainPage} />
                <Route path={`${match.url}/:PostId`} exact component={DetailPage} />
                <Route component={NotFound} />
            </Switch>
        </Box>
    );
}

export default ProjectManage;