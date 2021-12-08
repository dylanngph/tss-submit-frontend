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
import NFTScreen from "./screens/stampNFT";
import Application from "./screens/application";
import User from "./screens/user";
import { ThemeProvider, createMuiTheme, createTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

function App() {
  const theme = createTheme();
  const THEME = createMuiTheme({
    typography: {
      "fontFamily": `"Inter", sans-serif`,
      "fontSize": 14,

      h2: {
        fontSize: "24px",
        fontWeight: "bold",
        lineHeight: "29px",

        [theme.breakpoints.down('md')]: {
          fontSize: "18px",
          lineHeight: "22px",
        },
      }
    },
    
  });

  return (
    <ThemeProvider theme={THEME}>
      <Grid container direction="row">
        <Header />
        <Box sx={{ flexGrow: 1, background: "#fcfcfd", width: { sm: `calc(100% - 244px)` }, minHeight: "calc(100vh - 64px)", height: "auto" }}>
          <Toolbar />
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/register-success" component={RegisterSuccess} />
            <Route path="/security-question" component={SecurityQuestion} />
            <Route path="/forgotpass" component={ForgotPassScreen} />
            <Route path="/reset-password-success" component={ResetPasswordSuccess} />
            <Route path="/manage" component={ProjectManage} />
            <Route path="/stamp-nft" component={NFTScreen} />
            <Route path="/application" component={Application} />
            <Route path="/user" component={User} />
            <Route component={NotFound} />
          </Switch>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
