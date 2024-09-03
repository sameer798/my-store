// src/routes.js
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductList from "./components/Layout/ProductList";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";

import ProtectedRoute from "./ProtectedRoute";


const Routes = (authCtx) => {
    

  const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Root /> },
        { path: "/about", element: <About /> },
        { path: "/home", element: <Home /> },
        { path: "/contact", element: <ContactUs /> },
        { path: "/login", element: <Login /> },
        { path: "/product-details/:productId", element: <ProductPage /> },
        {path: '/store', element: (<ProtectedRoute><ProductList/></ProtectedRoute>)}
      ],
    },
  ];

 

  return createBrowserRouter(routes);
};

export default Routes;
