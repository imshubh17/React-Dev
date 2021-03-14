import React, {useState} from 'react'
import './TopHead.css'
import logo from '../../Images/logo.png';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

export default function TopHead() {
    

    return (
        <div className="tophead">          
        <img className ="tophead_logo" src={logo} />   
        <div className = "tophead_right_side">
            <MonetizationOnOutlinedIcon className="tophead_right_side_logo"/>
            <HelpOutlineSharpIcon className="tophead_right_side_logo"/>
            <AccountCircleRoundedIcon className="tophead_right_side_logo"/>
        </div>    
        </div>
        
    )
}
