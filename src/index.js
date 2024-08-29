import React from "react";
import ReactDOM from "react-dom/client";
import ProductList from "./components/Layout/ProductList";
import App from "./App";
import Root from "./components/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./components/store/ContextProvider";

// import '../node_modules/react-bootstrap/dist/react-bootstrap';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  { path: "/", element: <App />,
    children: [
      { path: "/", element: <Root/> },
      { path: "/about", element: <About /> },
      {path: '/home', element: <Home/>},
      {path: '/store', element: <ProductList/>},
      {path: '/contact', element: <ContactUs/>},

    ]
   },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
