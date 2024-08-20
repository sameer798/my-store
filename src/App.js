import Header from "./components/Layout/Header";
import ProductList from "./components/Layout/ProductList";
import CartButton from "./components/Layout/Button";
import Footer from "./components/Layout/Footer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
   <>
    <Header/>
    <main>
    <Cart/>
    <ProductList/>
    <CartButton/>
    </main>
    <Footer/>
   </>
  );
}

export default App;
