import axios from "axios";
import {useState,useEffect} from 'react';
import {BrowserRouter , Routes, Route } from "react-router-dom"
import Navbar from "./Navbar/Navbar";
import Carousel from "../src/Carousel/Carousel";
import Card from "./Card/Card";
import Details from "./More Details/Details";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import "./App.css";

function App() {

  const [productsfetch,SetProductsfetch] = useState([])  
      useEffect(()=>{
      axios.get("https://fakestoreapi.com/products").then((things) => {
        SetProductsfetch(things.data)})
      
      
      },[]
)


const [products , Setproducts] = useState([])
const [firstloading , Setfirstloading] = useState(true)
const filter = (category) =>{   
  if (category === "all"){
      return Setproducts(productsfetch) }
      else{        
  const filterd = productsfetch.filter((item)=>item.category === category)
  Setproducts(filterd)
  Setfirstloading(false)
}}



    const [detail,Setdetails] = useState([])       
    const details = (id) =>{
        Setdetails(productsfetch.filter((item)=> item.id === id ))
    }
    


    return (
      <BrowserRouter>
      
        <Navbar filter={filter} />
        <Carousel  />
        <Routes >
        <Route exact path="/" element={<Card details={details} product={firstloading ? productsfetch : products}/> } />
        <Route exact path="/details" element={<Details detail={detail} />} />
        <Route exact path="/cart" element={ <Cart/> } />
        </Routes>
        <Footer />
        </BrowserRouter>
  );
}

export default App;
