import React from 'react'
import CourseList from "../../Courses/CourseList";
import Grid from '@material-ui/core/Grid';
import MainHeader from './MainHeader';
export default function Home() {
    
    return (
        <>        
        <MainHeader/>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        > 
          <CourseList/>
        </Grid> 
        
        </>
    )
}
