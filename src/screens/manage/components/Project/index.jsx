import { Route, Switch, useRouteMatch } from "react-router-dom";
import NotFound from 'components/display/NotFound';
import MainPage from './page/MainPage';
import DetailPage from './page/DetailPage';
import { Box } from '@mui/material';

function ProjectManage(props) {
    const match = useRouteMatch();
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