import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import ProjectManage from "screens/manage/components/Project";
import Header from "./components/display/Header";
import NotFound from "./components/display/NotFound";

import ForgotPassScreen from "./screens/account/components/ForgotPass";
import ResetPasswordSuccess from "./screens/account/components/ForgotPass/ResetPasswordSuccess";
import LoginScreen from "./screens/account/components/Login";
import RegisterScreen from "./screens/account/components/Register";
import RegisterSuccess from "./screens/account/components/Register/RegisterSuccess";
import SecurityQuestion from "./screens/account/components/Register/SecurityQuestion";
import HomeScreen from "./screens/home";
import Application from "./screens/application";
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';

function App() {

  const THEME = createMuiTheme({
    typography: {
      "fontFamily": `"Inter", sans-serif`,
      "fontSize": 14,
    },
  });

  return (
    <ThemeProvider theme={THEME}>
      <Grid container direction="row">
        <Header />
        <Box sx={{
            width: 'calc(100% - 244px)',
            background: "#fcfcfd"
          }}>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/register-success" component={RegisterSuccess} />
            <Route path="/security-question" component={SecurityQuestion} />
            <Route path="/forgotpass" component={ForgotPassScreen} />
            <Route path="/reset-password-success" component={ResetPasswordSuccess} />
            <Route path="/manage" component={ProjectManage} />
            <Route path="/application" component={Application} />
            <Route component={NotFound} />
          </Switch>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
