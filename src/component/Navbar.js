import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{position:'relative'}}>
      <Navbar style={{position:'sticky'}} bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand>
            HANZALA SHOP
          </Navbar.Brand>

          <Nav>
            <Nav.Link to="/" as={Link}>
              Products
            </Nav.Link>
          </Nav>

          <Navbar.Toggle />
          <Navbar.Collapse className=" justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>
                CART 0
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
