import React from 'react'
import Home from "./Home/Home";
import Login from "../Authentication/Login"
import Logout from "../Authentication/Logout"
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
                           
            </Switch>         
        </>
    )
}
