import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Root from "./components/Root";
import About from "./pages/About";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContextProvider from "./components/store/ContextProvider";

// import '../node_modules/react-bootstrap/dist/react-bootstrap';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  { path: "/", element: <App />,
    children: [
      { path: "/", element: <Root/> },
      { path: "/about", element: <About /> },
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
