import React from "react";
import image1 from "../../assets/images1.jpeg";
import image2 from "../../assets/images2.jpeg";
import image3 from "../../assets/images3.jpeg";
import image4 from "../../assets/images4.jpeg";

const items = [
  {
    id: 1,
    image: image1,
    title: "Item 1",
    description: "Description for item 1",
    price: 1200,
    quantity : 12
  },
  {
    id: 2,
    image: image2,
    title: "Item 2",
    description: "Description for item 2",
    price: 1400,
    quantity : 2
  },
  {
    id: 3,
    image: image3,
    title: "Item 3",
    description: "Description for item 3",
    price: 1600,
    quantity : 22
  },
  {
    id: 4,
    image: image4,
    title: "Item 4",
    description: "Description for item 4",
    price: 1299,
    quantity : 6
  },
  {
    id: 5,
    image: image1,
    title: "Item 1",
    description: "Description for item 1",
    price: 999,
    quantity : 9
  },
  {
    id: 6,
    image: image2,
    title: "Item 2",
    description: "Description for item 2",
    price: 589,
    quantity : 10
  },
  {
    id: 7,
    image: image3,
    title: "Item 3",
    description: "Description for item 3",
    price: 499,
    quantity : 10
  },
  {
    id: 8,
    image: image4,
    title: "Item 4",
    description: "Description for item 4",
    price: 499,
    quantity : 3
  },
];

const CartItem = (props) => {
  
  
   return items.map((item) => (
      <tr key={item.id}>
        <td><img src={item.image} alt="images" style={{width: "4rem", borderRadius: "10px"}}/>
        <span>{item.title}</span>
        </td>
        <td>{item.quantity}</td>
        <td>{item.price}-₹</td>
      </tr>
    ));
  
};

export default CartItem;
