import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";
import {useStateValue} from './StateProvider';

export default function Header() {
    const [{user}, dispatch ] = useStateValue();
    const login =()=>{
        dispatch({
            type:'SET_USER',
            user: null
          })
    }
    return (
        <nav className="header">    
            <Link to={"/"} className="header_link header_nav">           
                <h2>Home</h2> 
            </Link>          

            { user ?
                <Link to={"/adminpanel"} className="header_link header_nav">
                    
                        <h2>Admin Panel</h2>
                               
                </Link>   :
                null
            }
            <div className="header_nav">
                                  
                <Link to={"/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="header_optionLineOne"> {user ? <p>Hello Admin</p>: <p>If You Are Admin</p>}</span>
                        <span className="header_optionLineTwo">{!user ? "Sign In" : "Signout"}</span>
                    </div>                 
                </Link>               
                
            </div>
           
        </nav>
    )
}
