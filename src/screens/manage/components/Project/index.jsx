import React, {useState, useEffect} from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { useAppDispatch } from 'app/hooks';
import NotFound from 'components/display/NotFound';
import MainPage from './page/MainPage';
import DetailPage from './page/DetailPage';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import {postBreadcrumb} from 'redux/breadcrumb/breadcrumbs.action'

function ProjectManage(props) {
    const match = useRouteMatch();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postBreadcrumb([
            {
                'label': 'Jadelabs',
            },
        ]))
    }, [])

    return (
        <Box>
           <Switch>
                <Route path={match.url} exact component={MainPage} />
                <Route path={`${match.url}/:PostId`} exact component={DetailPage} />
                <Route component={NotFound} />
            </Switch>
        </Box>
    );
}

export default ProjectManage;