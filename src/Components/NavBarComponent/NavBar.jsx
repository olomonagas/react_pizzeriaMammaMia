import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Link from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  } from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css";
import { Link } from "react-router";
import React from "react";

function NavBar() {
  const total = 25000;
  const token = false;

  return (
    <Navbar expand="lg" className="text-white bg-dark navbar-light">
      <Container>
        <Navbar.Brand className="text-white">Pizzeria Mamma Mia</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-white hamburger-white"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="text-white">
          <Nav className="w-100 justify-content-between">
        <div className="menuNavegacion">
              <Nav className="text-white align-items-center">
                <span>🍕</span>
                <Link to="/">Home</Link>
              </Nav>
              {/* Operador ternario para mostrar Profile o Register */}
              {
              token ? (
                // Verdadero
                <React.Fragment>
                  <Nav className="text-white align-items-center">
                    <span>🔓</span>
                    <Link to="/Profile">Profile</Link>
                  </Nav>
                  <Nav className="text-white align-items-center">
                    <span>🔓</span>
                    <Link to="/Logout">Logout</Link>
                  </Nav>
                </React.Fragment>
                )
               :
                <React.Fragment>
                  <Nav className="text-white align-items-center">
                    <span>🔐</span>
                    <Link to="/Login">Login</Link>
                  </Nav>

                  <Nav className="text-white align-items-center">
                    <span>🔐</span>
                    <Link to="/Register">Register</Link>
                  </Nav>
                </React.Fragment>
              }
            </div>
            <div className="totalcompra">
              <Nav className="text-white align-items-center">
                <span>🛒</span>
                <Link to="/Cart">Total: $ {total.toLocaleString()}</Link>
              </Nav>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
