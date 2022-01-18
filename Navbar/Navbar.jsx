import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { FaAlignRight } from "react-icons/fa";
import {useState} from 'react';
import logo from "../images/logo.svg"



export default function Navbar( {filter}) {
    const list = useSelector(state => state)

    let [isToggle , SetToggle] = useState(false)

    const handleToggle = () => {
        SetToggle(!isToggle)
    }

    return (
        <nav>
            <div className="navbar">
                <div className="nav-center">
                            <div className="nav-header">
                            <Link to="/"><img src={logo} width={"100%"} height={"60px"} alt="beach resort" /></Link> 
                            <button type="button" className="nav-btn" onClick={handleToggle} >
                                    <FaAlignRight className="nav-icon" />
                                    </button>
                            </div>
                    <ul className={isToggle ? 'nav-links show-nav' : "nav-links"}>
                                    <li onClick={()=>filter("all")}  ><Link to="/"> All  </Link>  </li>
                                    <li onClick={()=>filter("men's clothing")}> <Link to="#">men's clothing</Link>   </li>
                                    <li onClick={()=>filter("women's clothing")}><Link to="/"> women's clothing </Link>   </li>
                                    <li onClick={()=>filter("electronics")}><Link to="/"> electronics </Link>  </li>
                                    <li onClick={()=>filter("jewelery")}> <Link to="/">jewelery  </Link> </li>
                                </ul>
                    <Link className='test'  to="/cart"> <AiOutlineShoppingCart className={list.length <= 0 ?'iconn' : 'ikon'}/> <span className={list.length <= 0 ? 'cartnum' : "cartnumm"}> {list.length} </span>  </Link>
                </div>
                </div>
        </nav>
    )
}
