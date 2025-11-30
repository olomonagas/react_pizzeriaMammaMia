import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React from "react";
import { useCart } from "../../hooks/useCart";

function NavBar() {
  const { total } = useCart();
  const token = false;

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Pizzeria Mamma Mia</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            {/* Menú izquierdo */}
            <Nav.Link as={Link} to="/">
              🍕 Home
            </Nav.Link>

            {token ? (
              <>
                <Nav.Link as={Link} to="/Profile">🔓 Profile</Nav.Link>
                <Nav.Link as={Link} to="/Logout">🔓 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/Login">🔐 Login</Nav.Link>
                <Nav.Link as={Link} to="/Register">🔐 Register</Nav.Link>
              </>
            )}

          </Nav>

          {/* Menú derecho */}
          <Nav>
            <Nav.Link as={Link} to="/Cart">
              🛒 Total: $ {total.toLocaleString()}
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

