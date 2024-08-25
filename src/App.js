import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import {Outlet} from 'react-router-dom'
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartButton from './components/Layout/CartButton'




function App() {
  const [showCart, setShowCart] = useState(true);

  const cartShowHandler = () => {
    setShowCart(false);
  };

  const cartHideHandler = () => {
    setShowCart(true);
  };
  return (
    <>
       <Header onShowCart={cartShowHandler}/>
       {!showCart && <Cart  onHideCart={cartHideHandler}/>}
      
       <Outlet/>
       <CartButton onShowCart={cartShowHandler} />
      <Footer />
    </>
  );
}

export default App;
