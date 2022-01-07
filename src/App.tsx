import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import useToken from 'components/hook/useToken';

function App() {
  let history = useHistory();
  const theme = createTheme();
  const THEME = createTheme({
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
      },

      h5: {
        color: '#11142D',
        lineHeight: '22px',
        fontSize: '18px',
        fontWeight: '600',
      },

      h6: {
        color: '#A6B0C3',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '150%',
      },
    },
  });

  const [user, setUser] = useState({ email: "" })
  const {token, setToken} = useToken();

  const handleLogout = () => {
    setUser({ email: "" });
    setToken(null);
    history.push("/login");
  }

  return (
    <ThemeProvider theme={THEME}>
      <Grid container direction="row">
        <Header auth={token} handleLogout={handleLogout} props="true" />
        <Box sx={{ flexGrow: 1, background: "#fcfcfd", width: { sm: `calc(100% - 244px)` }, minHeight: "calc(100vh - 64px)", height: "auto" }}>
          <Toolbar />
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            {token ?
              <>
                <Route path="/manage" component={ProjectManage} />
                <Route path="/stamp-nft" component={NFTScreen} />
                <Route path="/application" component={Application} />
                <Route path="/user" component={User} />
              </>
              :
              <>
                
                <Route exact path="/login" render={(props) => <LoginScreen setToken={setToken} /> } />
                <Route path="/register" component={RegisterScreen} />
                <Route path="/register-success" component={RegisterSuccess} />
                <Route path="/security-question" component={SecurityQuestion} />
                <Route path="/forgotpass" component={ForgotPassScreen} />
                <Route path="/reset-password-success" component={ResetPasswordSuccess} />
              </>
            }
          </Switch>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
