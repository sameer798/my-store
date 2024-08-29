import { useReducer } from "react";
import cartContext from "./cart-context";
import image1 from "../../assets/images1.jpeg";
import image2 from "../../assets/images2.jpeg";
import image3 from "../../assets/images3.jpeg";
import image4 from "../../assets/images4.jpeg";

const items = [
  {
    id: "p1",
    image: image1,
    title: "Item 1",
    description: "Description for item 1",
    price: 1200,
    quantity: 12,
    rating: 4.5,
  },
  {
    id: "p2",
    image: image2,
    title: "Item 2",
    description: "Description for item 2",
    price: 1400,
    quantity: 11,
    rating: 4.2,
  },
  {
    id: "p3",
    image: image3,
    title: "Item 3",
    description: "Description for item 3",
    price: 1600,
    quantity: 10,
    rating: 4.0,
  },
  {
    id: "p4",
    image: image4,
    title: "Item 4",
    description: "Description for item 4",
    price: 1299,
    quantity: 9,
    rating: 3.9,
  },
  {
    id: "p5",
    image: image1,
    title: "Item 1",
    description: "Description for item 1",
    price: 999,
    quantity: 8,
    rating: 4.9,
  },
  {
    id: "p6",
    image: image2,
    title: "Item 2",
    description: "Description for item 2",
    price: 589,
    quantity: 7,
    rating: 4.5,
  },
  {
    id: "p7",
    image: image3,
    title: "Item 3",
    description: "Description for item 3",
    price: 499,
    quantity: 6,
    rating: 4.5,
  },
  {
    id: "p8",
    image: image4,
    title: "Item 4",
    description: "Description for item 4",
    price: 499,
    quantity: 5,
    rating: 3.5,
  },
];

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const existingItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );

    let updatedCartItems;
    if (existingItemIndex !== -1) {
      const existingItem = state.cartItems[existingItemIndex];
      const updetedTotalAmount =
        +state.totalAmount + existingItem.price ;
    
      const updatedCartItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
     
      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingItemIndex] = updatedCartItem;

      let updatedItem = state.items[existingItemIndex];
      updatedItem = {
        ...updatedItem,
        quantity : updatedItem.quantity - 1,
      }
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

      return {
        ...state,
        items : updatedItems,
        cartItems: updatedCartItems,
        totalAmount: updetedTotalAmount,
      };
    } else {
      const newItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      let newItem = state.items[newItemIndex];
      newItem = {
        ...newItem,
        quantity: 1,
      };
      let updatedItem = state.items[newItemIndex];
      updatedItem = {
        ...updatedItem,
        quantity : updatedItem.quantity - 1,
      }
      const updatedItems = [...state.items];
      updatedItems[newItemIndex] = updatedItem;
      const updetedTotalAmount = +state.totalAmount + newItem.price;
      
      return {
        ...state,
        items : updatedItems,
        cartItems: state.cartItems.concat(newItem),
        totalAmount: updetedTotalAmount,
      };
    }
  }
  if(action.type === "REMOVE_CART_ITEM"){
    const existingCartItemIndex = state.cartItems.findIndex(item => item.id === action.id);
    const existingCartItem = state.cartItems[existingCartItemIndex];
    const updetedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedCartItems;
    const updatedCartItem = {
      ...existingCartItem,
      quantity : existingCartItem.quantity - 1,
    }
    updatedCartItems = [...state.cartItems];
    updatedCartItems[existingCartItemIndex] = updatedCartItem;
  
    const existingItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingtItem = state.items[existingItemIndex];
    const updatedItem = {
      ...existingtItem,
      quantity : existingtItem.quantity + 1,
    }
    const updatedItems = [...state.items];
    updatedItems[existingItemIndex] = updatedItem;

    return {
      ...state,
      items : updatedItems,
      cartItems : updatedCartItems,
      totalAmount : updetedTotalAmount
    }

  }

  return state;
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    totalAmount: 0,
    items: items,
    cartItems: [],
  });

  const addItemHandler = (id) => {
    dispatchCartAction({ type: "ADD_TO_CART", id: id });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({type: "REMOVE_CART_ITEM",  id : id})
  };

  const context = {
    totalAmount: cartState.totalAmount,
    items: cartState.items,
    cartItems: cartState.cartItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <cartContext.Provider value={context}>
      {props.children}
    </cartContext.Provider>
  );
};

export default ContextProvider;
