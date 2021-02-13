import React,{useState, useEffect} from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Course from './Course';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList() {
  const classes = useStyles();
  const [data, setData]= useState([]);
    useEffect(() => {
        const fetchData = () => {
           axios.get(`/api`).then(result=>{
            const body = result.data
            console.log(JSON.parse(body.data));
            setData(JSON.parse(body.data));
           })          
            
        };
        fetchData();
    }, []);//empty for effect when load and then name changes
    

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <Course/>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Course/>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <Course/>
      </ListItem>
    </List>
  );
}
