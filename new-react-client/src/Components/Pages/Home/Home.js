import {React, useState, useEffect} from 'react'
import axios from "axios";
export default function Home() {
    const [data, setData]= useState([]);
    useEffect(() => {
        const fetchData = () => {
           axios.get(`/api`).then(result=>{
            const body = result.data
            setData(body.msg);
           })          
            
        };
        fetchData();
    }, []);//empty for effect when load and then name changes
    
    return (
        <p>Welcome to home page --- {data}!!!</p>
    )
}
