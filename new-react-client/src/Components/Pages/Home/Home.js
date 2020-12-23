import {React, useState, useEffect} from 'react'
import axios from "axios";
import CourseList from "../../Courses/CourseList";
import Grid from '@material-ui/core/Grid';

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
        <>
        <p>Welcome to home page --- {data}!!!</p>
        <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>
  <CourseList/>
  </Grid>   

</Grid> 
        
        </>
    )
}
