import React, {useEffect} from 'react'
import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import Login from './Login';
import {useStateValue} from './StateProvider';
import Panel from './Panel'
function App() {
  const [{user}, dispatch ] = useStateValue();
  return (
    <Router>
    <div className="App">
    <Switch>   
    <Route path="/login">
    <Login/>
    </Route>
    <Route path="/adminpanel">
    {user ? <div><Header/> <Panel/></div> : <h1>404</h1> } 
    </Route>
    <Route path="/">
      <Header/>     
      <Home/>
    </Route>
  </Switch>
    </div>
    </Router>
  );
}

export default App;
