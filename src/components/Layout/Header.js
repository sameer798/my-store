import React, { useContext } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Banner from "./Banner";
import { NavLink, Link } from "react-router-dom";
import cartContext from "../store/cart-context";
import AuthContext from "../store/auth-context";



const Header = (props) => {
  const authCtx = useContext(AuthContext)
  const ctx = useContext(cartContext);
  const numberOfItem = ctx.cartItems.reduce((currNum, item) => {
    return currNum + item.quantity;
  }, 0);


const logoutHandler = (e) => {
  e.preventDefault();
  authCtx.logout()
}

  return (
    <header>
      <Navbar
        className="fixed-top"
        style={{ backgroundColor: "#0D0E10" }}
        expand="lg"
      >
        <Container style={{ height: "4rem", position: "relative" }}>
          <Navbar.Brand as={Link} to="/" style={{ fontWeight: 600, color: "#D9008D" }}>
            My Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/"
                as={NavLink}
                to="/home"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#1d238c" : "#8B8B8C",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                Home
              </Nav.Link>
              <Nav.Link href="/home"
                as={NavLink}
                to="/store"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#1d238c" : "#8B8B8C",
                  fontWeight: isActive ? "bold" : "normal",
                })}>
                Store
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/about"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#1d238c" : "#8B8B8C",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                About
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/contact"
                className="nav-link"
                style={({ isActive }) => ({
                  color: isActive ? "#1d238c" : "#8B8B8C",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >ContactUs</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">

            {!authCtx.isLoggedIn ? <Nav.Link
                as={NavLink}
                to="/login"
                className="nav-link m-2"
                style={({ isActive }) => ({
                  color: isActive ? "#1d238c" : "#8B8B8C",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >Login</Nav.Link> : <Button style={{marginRight: "5px"}} onClick={logoutHandler}>Logout</Button>}

              <Button
                style={{ backgroundColor: "#D9008D" }}
                onClick={props.onShowCart}
              >
                Cart
              </Button>
              <span
                style={{
                  position: "relative",
                  color: "#D9008D",
                  marginLeft: "10px",
                  fontWeight: "600",
                }}
              >
                {numberOfItem}
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Banner />
    </header>
  );
};

export default Header;
