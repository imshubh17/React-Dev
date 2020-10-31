import React,{useEffect,useState} from 'react'

export default function About() {
    const [data, setData]= useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api`);
            const body = await result.json();
            console.log(body);
            setData(body);
        };
        fetchData();
    }, []);//empty for effect when load and then name changes
    
    return (
        <div>
            <ul>
                {data.map((el,key)=> <li key={key}>{el.email}</li> )}
            </ul>
           
        </div>
    )
}
