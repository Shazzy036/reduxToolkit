import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector(store => store.cart)

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
                CART {cart.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
