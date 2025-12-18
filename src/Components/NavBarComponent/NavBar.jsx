import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useCart } from "../../context/useCart";
import { useUser } from "../../context/useUser";

function NavBar() {
  const { total } = useCart();
  const { token, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Pizzeria Mamma Mia</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">🍕 Home</Nav.Link>

            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link>
                <Nav.Link onClick={handleLogout}>🔒 Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">🔐 Login</Nav.Link>
                <Nav.Link as={Link} to="/register">🔐 Register</Nav.Link>
              </>
            )}
          </Nav>

          <Nav>
            <Nav.Link as={Link} to="/cart">
              🛒 Total: $ {total.toLocaleString()}
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


