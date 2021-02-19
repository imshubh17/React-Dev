import React, {useState} from 'react'
import './Home.css'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import {useStateValue} from './StateProvider';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1000,
      height: 700,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

export default function Home() {
    const [{data}, dispatch ] = useStateValue(); 
    const [select, setSelect]  = useState(""); 
    const classes = useStyles();
    const handleChange = e=>{
        setSelect(e.target.value)
    }

    const AllCom = () => (
        <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Products</ListSubheader>
            </GridListTile>
            {data.map((item,id)=>(
                <div key={id} className="product">
                <div className="product_info">
                <p>{item.title}</p>
                <p>Brand:{item.brand}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{item.price}</strong>               
                </p>
                </div>
                </div>             
           
            ))}
            </GridList>
        )

        const Condition = (value) => value.brand.toLowerCase() === select;

        const Filtered = () =>(
            <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Products</ListSubheader>
            </GridListTile>
            {data.filter(Condition).map((item,id)=>(
                <div key={id} className="product">
                <div className="product_info">
                <p>{item.title}</p>
                <p>Brand:{item.brand}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{item.price}</strong>               
                </p>
                </div>
                </div>             
           
            ))}
            { data.filter(Condition).length > 0 ? null : <h2>No data Available</h2>}
            </GridList>
        )

    return (
        <div className="home">          
        <h4>Filter by Brand</h4><select 
        value={select} 
        onChange={handleChange} 
      >
      <option selected value="">None</option>
       <option value="apple">Apple</option>
        <option value="sumsung">Sumsung</option>
        <option value="mi">MI</option>
      </select>
        
            <div className={classes.root}>
           {
                (select) === "" ? <AllCom/> : <Filtered/>
           }
            </div>          
        
        </div>
        
    )
}
