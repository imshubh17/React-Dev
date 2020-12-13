import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Components/Pages/Routes";
import { hot } from 'react-hot-loader';
import React,{useReducer} from "react";
import {VerifyLogin, VerifySignup} from "./VerifyLogin";
export const AuthContext = React.createContext();

const initialState = { token: "", status:false};

const authReducer = (state, action) => {
  const {type , User} = action 
  switch (type) {
    case "login":      
    VerifyLogin(User)
      console.log('login case suceess')
      return {
        ...state, token: "demo", status:true
      };  
    case "signup":      
    VerifySignup(User)
      console.log('login case suceess')
      return {
        ...state, token: "demo", status:true
      };    
    default:
      return state;
  }
};

function App() {
  const [auth, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider
      value={{ authState: auth, authDispatch: dispatch }}
    >
    <div className="App">
      <Navbar />  
      <Router>
        <Routes/>
      </Router>    
    </div>
    </AuthContext.Provider>
  );
}

export default hot(module)(App);
