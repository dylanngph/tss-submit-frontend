
import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from 'components/display/NotFound';
import MainPage from './page/MainPage';
import DetailPage from './page/DetailPage';

function ProjectManage(props) {
    const match = useRouteMatch();
    return (
        <div>
           <Switch>
                <Route path={match.url} exact component={MainPage} />
                <Route path={`${match.url}/:PostId`} exact component={DetailPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default ProjectManage;