import React, {useEffect} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useStateValue} from './StateProvider';
import Header from './Components/Header/Header';
import Home from './Home';

function App() {
  const [{user}, dispatch ] = useStateValue();
  return (
    <Router>
    <div className="App">
    <Switch>       
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
