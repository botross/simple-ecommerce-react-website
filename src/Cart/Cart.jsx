import React from 'react'
import "./cart.css"
import { Link } from 'react-router-dom'
import {useSelector , useDispatch} from "react-redux"
import { useEffect , useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Cart() {
    const [popUp2, setPopUp2] = useState(false)
    useEffect(() => {
        let time = setTimeout(() => {
            setPopUp2(false)
        }, 3000);
            return popUp2 ? time : null 
        })
    const cart = useSelector(state => state)
    const dispatch = useDispatch();
    const testo = cart.map((item)=>{
        
        return(
        <>
        <tr key={item.id}>
        <td><div className='cart-item' key={item.id}>
        <div className='cart-img'> <img className='cart-imgg' width={150} src={item.image} alt={item.title} /></div>
            <div className='cart-desc'>
        <h4>{item.title}</h4>
        <span>{item.description}</span>
        </div>
        </div>
        </td>
        <td style={{padding: "14px"}} >{item.price } $ </td>
        <td style={{padding: "14px"}}>Quantity: <br /> <span style={{marginLeft: "25px " } }> {item.quantity}</span>  <br /> <button className='incbtn' onClick={() => {dispatch({type : 'INC' , payload: item})}}>+</button>
        <button style={{marginLeft: "10px "}} className='incbtn' onClick={() => {dispatch({type : 'DEC' , payload: item})}} >-</button> </td>
        <td style={{padding: "14px"}}>Total Price: <br /> { item.price * item.quantity}$</td>
        <td><button className='button-24' onClick={() => {
            setPopUp2(true)
            dispatch({type : "Remove_item" , payload: item })}}> Remove</button> </td>
    </tr>
    <hr />
    </>
    )})
    return (
        <>

        <div className='cartall'>
        <div className='popup2'>
                {
                    popUp2 ? 
                        <Stack sx={{ width: '100%' , hight : "5000px" }} spacing={2}>
                            <Alert onClose={() => {setPopUp2(false)}} variant="filled" severity="info">
                                Item removed successfully  !
                                </Alert>
                            </Stack> : null
                }
                </div>

            <table>
  
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantaty</th>
                    <th>Total</th>
                    <th></th>
                    <hr />
                </tr>
                <hr />
                
        {testo}
            </table>
            <div className='total'>
            <div className='gtotal'>
                <h3 style={{color: "Red"}}>Grand Total : 123$</h3>
                <button className='button-37' >Proceed to CheckOut</button>
            </div>
            <div>
           <Link className="Link" to="/" ><button className="button-27" > Back </button></Link> 
            </div>
            </div>
        </div>
        </>
    )
}

export default Cart
