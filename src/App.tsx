import React from "react";
import { Route, Switch } from "react-router-dom";
import ProjectManage from "screens/manage/components/Project";
import Footer from "./components/display/Footer";
import Header from "./components/display/Header";
import NotFound from "./components/display/NotFound";
import Sidebar from "./components/display/Sidebar";
import ForgotPassScreen from "./screens/account/components/ForgotPass";
import LoginScreen from "./screens/account/components/Login";
import RegisterScreen from "./screens/account/components/Register";
import HomeScreen from "./screens/home";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/forgotpass" component={ForgotPassScreen} />
        <Route path="/manage" component={ProjectManage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
