import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import Banner from "./Banner";

const Header = () => {
  return (
    <header>
      <Navbar className="fixed-top" style={{ backgroundColor: "#0D0E10"}} expand="lg">
        <Container style={{ height: "4rem", position: "relative" }}>
          <Navbar.Brand href="/" style={{ fontWeight: 600, color: "#D9008D" }}>
            My Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: "#8B8B8C" }}>
                Home
              </Nav.Link>
              <Nav.Link href="/store" style={{ color: "#8B8B8C" }}>
                Store
              </Nav.Link>
              <Nav.Link href="/about" style={{ color: "#8B8B8C" }}>
                About
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <Button style={{ backgroundColor: "#D9008D" }}>Cart</Button>
              <span
                style={{
                  position: "relative",
                  color: "#D9008D",
                  marginLeft: "10px",
                  fontWeight: "600"
                }}
              >
                2
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Banner/>
    </header>
  );
};

export default Header;
