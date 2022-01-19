import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect , useState } from 'react';
import {BsCartPlus} from "react-icons/bs"
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

function Card({product , details}) {
const [popUp, setPopUp] = useState(false)
useEffect(() => {
    let time = setTimeout(() => {
        setPopUp(false)
    }, 3000);
        return popUp ? time : null 
    })
let dispatch = useDispatch()
    const kart =  product.map((item)=>{
        item.quantity = 1;
            return(
                <Grid item lg={3} md={6} sm={12}>
                    <div className="containerrr" key={item.id}>
                    <div >
                        <div className="img-cont">
                        <img src={item.image} className="item-img" alt="" width={"200px"} />
                        </div>
                        <div className='desco'>
                        <h1 className="name">{item.title.substring(0 , 32)}</h1>
                        {/* <p className="desco">{item.description.substring(0,102)}</p> */}
                        <p className="price" >  {item.price} $</p>
                        <p>{ 
                        (item.rating.rate) <= 1 ? "⭐" : 
                        (item.rating.rate) <= 2 ? "⭐⭐" :
                        (item.rating.rate) <= 3 ? "⭐⭐⭐" :
                        (item.rating.rate) <= 4 ? "⭐⭐⭐⭐" :
                        (item.rating.rate) <= 5 ? "⭐⭐⭐⭐⭐" : null
                        } </p>
                        </div>
                        <div className='crdbtns'>
                        <Link className="Link" to="/details"> <button className="btn-primary" onClick={()=> {details(item.id)}}>  More Details </button> </Link> 
                        <button className='btn-primary' onClick={ () =>{
                            setPopUp(true)
                            dispatch({type : "Add_item" , payload : item })}}>AddtoCart <BsCartPlus/> </button>
                        </div>
                    </div>
                </div>
                </Grid>
            )
        })
        return (
            <>
            <div className="wrapper">
            <div className='popup'>
                {
                    popUp ? 
                        <Stack sx={{ width: '100%' , hight : "5000px" }} spacing={2}>
                            <Alert onClose={() => {setPopUp(false)}} variant="filled" severity="success">
                                Successfully added to the cart....
                                </Alert>
                            </Stack> : null
                }
                </div>
                <Grid container spacing={4}>
                {kart}
                </Grid>
            </div>
            </>
        )
}

export default Card
