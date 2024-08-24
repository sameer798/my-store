import React, {useContext} from "react";
// import image1 from "../../assets/images1.jpeg";
// import image2 from "../../assets/images2.jpeg";
// import image3 from "../../assets/images3.jpeg";
// import image4 from "../../assets/images4.jpeg";
import cartContext from "../store/cart-context";

import { Button } from "react-bootstrap";

const CartItem = (props) => {
const ctx = useContext(cartContext);

const removeCartItem = id =>{
  ctx.removeItem(id)
}
  
   return ctx.cartItems.map((item) => (
      <tr key={item.id}>
        <td><img src={item.image} alt="images" style={{width: "4rem", borderRadius: "10px"}}/>
        <p style={{fontSize : '10px', marginBottom: '1px'}}>{item.title}</p>
        <p style={{fontSize : '10px', marginBottom: '1px'}}>{item.description}</p>
        </td>
        <td>{item.quantity}</td>
        <td>{item.price}-₹</td>
        <td><Button variant="danger" onClick={removeCartItem.bind(null, item.id)}>remove</Button></td>
      </tr>
    ));
  
};

export default CartItem;
