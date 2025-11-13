import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css'

function NavBar() {
  const total = 25000;
  // const token = false;
  
  return (
    <Navbar expand="lg" className="text-white bg-dark navbar-light">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Pizzeria Mamma Mia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white hamburger-white' />
        <Navbar.Collapse id="basic-navbar-nav" className='text-white'>
          <Nav className="me-auto">
            {/* <div className='menu'> */}
            <div className="menuNavegacion">
            <Nav.Link href="#home" className='text-white'>
              <span>🍕</span>Home</Nav.Link>
            <Nav.Link href="#profile" className='text-white'>
              <span>🔓</span>Profile</Nav.Link>
            <Nav.Link href="#logout" className='text-white'>
              <span>🔓</span>Logout</Nav.Link>
            <Nav.Link href="#login" className='text-white'>
              <span>🔐</span>Login</Nav.Link>
            <Nav.Link href="#register" className='text-white'>
              <span>🔐</span>Register</Nav.Link>
              </div>
              <div className="totalcompra">
              <Nav.Link href="#total" className='text-white'>
              <span>🛒</span>Total: $ {total.toLocaleString()}</Nav.Link>
              </div>
              {/* </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBar;

