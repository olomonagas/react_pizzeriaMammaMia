import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <Navbar expand="lg" className="text-white bg-dark">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Pizzeria Mamma Mia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Login</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}

export default NavBar;





// export default function Navbar() {
    // return (

        

{/* <nav className="navbar navbar-expand-lg navbar-dark text-white bg-green">
    <div className="container">
      <a className="navbar-brand ms-2" href="#"><img src="assets/img/logo-white.png" alt="Cuppon" className="cupon" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav ms-auto ps-2">
          <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
          <a className="nav-item nav-link" href="#">Features</a>
          <a className="nav-item nav-link" href="#">Pricing</a>
          {/* <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
        // </div>
    //   </div>
    // </div>
//   </nav> */}
    // )}

    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='text-white'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

//  <FontAwesomeIcon icon={byPrefixAndName.fat['lock']} />
/* <FontAwesomeIcon icon={byPrefixAndName.fat['lock-open']} />*/