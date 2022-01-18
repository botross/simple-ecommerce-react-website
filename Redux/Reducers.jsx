const Reducer = (cart = []  ,action) =>{ 
    if (action.type === "Add_item"){
     
            let tempCart = cart.filter((items)=>{ 
                return items.id === action.payload.id
            })
    
            if(tempCart < 1){
                return [...cart, action.payload]
            }
        }
    
    if (cart.length <= 0 ){
        return cart
    }


    if(action.type === "Remove_item"){
    return cart.filter((items)=>items.id !== action.payload.id)
        }
    

        if(action.type === 'INC'){
            let newinc =  cart.map((item)=>{
                 if(item.id === action.payload.id){
                     return {...item , quantity: item.quantity + 1 }
                 }else{
                     return item
                 }
             })
     
             return newinc;
         }


         if(action.type === 'DEC'){
            let newinc =  cart.map((item)=>{
                 if(item.id === action.payload.id){
                     return {...item, quantity: item.quantity - 1}
                 }else{
                     return item
                 }
             })
     
             return newinc;
         }
    
        return cart;





        }

export default Reducer