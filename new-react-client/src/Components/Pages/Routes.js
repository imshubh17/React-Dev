import React from 'react'
import Home from "./Home/Home";
import Signup from "../Authentication/Signup"
import Profile from "./Profile/Profile";
import {
    Route,
    Switch,
  } from 'react-router-dom';  

export default function Routes() {
    return (
        <>             
            <Switch>
                <Route path="/" component={Home} exact/>                                          
                <Route path="/sign-up" component={Signup} exact/>
                <Route path="/user" component={Profile} exact/>          
            </Switch>         
        </>
    )
}
