import './App.css';
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
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
import { adminData } from 'screens/user/config';
import Cookies from 'js-cookie'

interface LoginProps {
  email: string,
  password: string
}

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

  const [auth, setAuth] = useState(false)
  const [error, setError] = useState(false)
  const [user, setUser] = useState({ email: "" })

  const readCookies = () => {
    const userCookies = Cookies.get("user")
    if (userCookies) {
      setAuth(true)
    }
  }

  useEffect(() => {
    readCookies()
  }, [])

  const handleLogin = (values: LoginProps) => {
    for (let i = 0; i < adminData.length; i++) {
      if (values.email === adminData[i].email) {
        if (values.password === adminData[i].password) {
          setUser({
            email: values.email
          })
          setError(false)
          setAuth(true)
          Cookies.set("email", values.email)
          Cookies.set("user", "loginTrue")
          return
        }
      }
    }
    setError(true)
    return auth
  }

  const handleLogout = () => {
    setUser({ email: "" })
    setAuth(false)
    Cookies.remove("user")
    return <Redirect to='/'  />
  }

  return (
    <ThemeProvider theme={THEME}>
      <Grid container direction="row">
        <Header auth={auth} handleLogout={handleLogout} error={error} props="true" />
        <Box sx={{ flexGrow: 1, background: "#fcfcfd", width: { sm: `calc(100% - 244px)` }, minHeight: "calc(100vh - 64px)", height: "auto" }}>
          <Toolbar />
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            {auth ?
              <>
                <Route path="/manage" component={ProjectManage} />
                <Route path="/stamp-nft" component={NFTScreen} />
                <Route path="/application" component={Application} />
                <Route path="/user" component={User} />
              </>
              :
              <>
                
                <Route exact path="/login" render={(props) => <LoginScreen handleLogin={handleLogin} error={error} /> } />
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
