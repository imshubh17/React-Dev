import React, {useState} from 'react'
import './Login.css';
import {Link, useHistory} from 'react-router-dom'
import {useStateValue} from './StateProvider';

export default function Login() {
    const [{user}, dispatch ] = useStateValue();
    const history = useHistory();
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const login = event =>{
        event.preventDefault();//this stop refresh 
        if (Email === "admin@gmail.com" && Password === "admin123"){
            dispatch({
                type:'SET_USER',
                user: { email:Email, password: Password}
              })       
                //redirect home page
                history.push('/');      
        }else{
            alert("Wrong Email or password")
        }
           

    }

   
    return (
        <div className="login">
            <Link to="/">
            <img
            className="login_logo"
            src="https://www.kindpng.com/picc/m/10-109847_admin-icon-hd-png-download.png"
            alt=""/>
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                <h5>E-Mail</h5>
                <input onChange={(e)=>setEmail(e.target.value)} type="text"></input>
                <h5>Password</h5>
                <input onChange={(e)=>setPassword(e.target.value)} type="password"></input>
                <button onClick={login} type="submit" className="login_sign">Sign In</button>
                </form>            
            </div>
        </div>
    )
}
