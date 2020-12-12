import React from 'react'
import Home from "./Home/Home";
import {
    Route,
    Switch,
  } from 'react-router-dom';  

export default function Routes() {
    return (
        <>             
            <Switch>
                <Route path="/" component={Home} exact/>                               
            </Switch>         
        </>
    )
}
