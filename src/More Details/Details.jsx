import React from 'react'
import { Link } from 'react-router-dom'
import "./Details.css"
import { useDispatch } from 'react-redux'



export default function Details ({detail}) {
    const dispatch = useDispatch()

const data = detail.map((item)=>{return(    
    <div key={item.id}>
    <div className="containerrrr" >
        <div className="imgBx">
            <img src={item.image} alt={item.title}/>
        </div>
            <div className="details">
                <div className="content">
                    <h2>{item.title}<br/><span>{item.categoryy}</span></h2>
                    <p>{item.description}</p>
                    <h3>{item.price}$</h3>
                    <button className='button-31' onClick={()=> dispatch({type : "Add_item" , payload : item })}>Add to Cart</button>
                </div>
            </div>
           
    </div>
     <div>
      <Link className="Link" to="/" ><button className="button-27" > Back </button></Link> 
     </div>
     </div>
)})
    return (
        <div>
            {data}
        </div>
    )
}
