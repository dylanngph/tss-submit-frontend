import React from 'react';
import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from 'components/display/NotFound';
import MainPage from './stampNFTMain';
import DetailPage from './stampNFTDetail';

function NFTScreen(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.url} exact component={MainPage} />
                <Route path={`${match.url}/:NFTName`} exact component={DetailPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default NFTScreen;