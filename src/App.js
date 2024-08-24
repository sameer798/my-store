import Header from "./components/Layout/Header";
import ProductList from "./components/Layout/ProductList";
import CartButton from "./components/Layout/CartButton";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import ContextProvider from "./components/store/ContextProvider";

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
      <ContextProvider>
        <Header onShowCart={cartShowHandler} />
        <main>
          {!showCart && <Cart onHideCart={cartHideHandler} />}
          <ProductList />
          <CartButton onShowCart={cartShowHandler} />
        </main>
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
