import React from 'react'
import Home from "./Home/Home";
import Login from "../Authentication/Login"
import Logout from "../Authentication/Logout"
import Signup from "../Authentication/Signup"
import {
    Route,
    Switch,
  } from 'react-router-dom';  

export default function Routes() {
    return (
        <>             
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login} exact/>    
                <Route path="/logout" component={Logout} exact/>                               
                <Route path="/sign-up" component={Signup} exact/>           
            </Switch>         
        </>
    )
}
