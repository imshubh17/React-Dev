import React,{useState} from 'react'
import {useStateValue} from './StateProvider';
import {useHistory} from 'react-router-dom'

export default function Panel() {
    const history = useHistory();
    const [{data}, dispatch ] = useStateValue(); 
    const [title, setTitle] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const AddData =event=>{
        event.preventDefault();//this stop refresh
        if(title.length > 1 && brand.length>1 && price>0){
            dispatch({
                type: 'ADD_TO_STORE',
                item:{
                    title, brand, price
                }
            });
             //redirect home page
             history.push('/');   
        }else{
            alert("fill proper details")
        }
    }

    return (
        <div>
        <form>
        <h1>Add Product</h1><br/>  
        Title: <input type="text" onChange={(e)=>setTitle(e.target.value)} name="firstname"/> <br/>  
        Brand:  <input type="text" onChange={(e)=>setBrand(e.target.value)} name="lastname"/> <br/>
        Price:  <input type="text" onChange={(e)=>setPrice(e.target.value)} name="lastname"/> <br/>
        <button onClick={AddData}>Add</button>
     </form>  
        </div>
    )
}
