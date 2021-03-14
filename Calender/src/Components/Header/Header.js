import React, {useState} from 'react'
import './Header.css'
import MiddleHead from './MiddleHead'
import TopHead from './TopHead'



export default function Header() {
    

    return (
        <div className="header">          
        
        <TopHead/>
        <MiddleHead/>
        </div>
        
    )
}
