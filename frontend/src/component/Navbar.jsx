import React, { useState} from 'react';
import { Navbar, Nav, Container,Form, Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import './Style.css';

const MyNavbar = () => {
 
  const [activeNavItem, setActiveNavItem] = useState('Home');
 
  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };
 
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#action1">
          <img
            src="/assets/fmslogo.png" 
            alt="FMS Logo"
            className="d-inline-block align-top "
            width="100"
            height="75"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1" className={`nav-link mx-3 ${activeNavItem === 'Home' ? 'active' : ''}`} 
            onClick={() => handleNavItemClick('Home')}>Home</Nav.Link>
            <Nav.Link href="#action2" className={`nav-link mx-3 ${activeNavItem === 'About' ? 'active' : ''}`} 
            onClick={() => handleNavItemClick('About')}>About</Nav.Link>
            <Nav.Link href="#action3" className={`nav-link mx-3 ${activeNavItem === 'Services' ? 'active' : ''}`} 
            onClick={() => handleNavItemClick('Services')}>Services</Nav.Link>
            <Nav.Link href="#action6" className={`nav-link mx-3 ${activeNavItem === 'Contacts' ? 'active' : ''}`}
             onClick={() => handleNavItemClick('Contacts')}>Contacts</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center mx-5">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search..."  
                className="me-1 my-auto"
                aria-label="Search"
                style={{ borderColor: '#ffc107', fontStyle: "italic" }}
              />
              <Button variant="outline-warning"  className="mx-1 my-auto"><BsSearch /></Button> 
            </Form>
          </div>
          <div className="d-flex align-items-center">
          <Button variant="outline-warning">Login</Button>  
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
