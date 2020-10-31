import React from 'react'
import {
    Route,
    Switch,
  } from 'react-router-dom';  
  
import Home from './Home';
import About from './About';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import NavBar from './Components/NavBar'
export default function Pages() {
    return (      
        <>  
            <NavBar/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About} />
                            <Route path="/sign-in" component={Login} />
                            <Route path="/sign-up" component={SignUp} />
                                     
                </Switch>         
                </>
        )
}
