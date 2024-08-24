import { createContext } from "react";

const cartContext = createContext({
   totalAmount : 0,
   items : [],
   cartItems: [],
   addItem : ()=>{},
   removeItem : ()=>{} 
})

export default cartContext;