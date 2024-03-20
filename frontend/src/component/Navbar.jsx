import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button, DropdownDivider, Image } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import './Style.css';

const MyNavbar = () => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('Home');
  const dropdownRef = useRef(null);

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowProfileDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#action1">
          <img
            src="/assets/fmslogo.png" 
            alt="FMS Logo"
            className="d-inline-block align-top"
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
            <NavDropdown title="Services" className="mx-3 custom-dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action-1" className={`nav-dropdown-link ${activeNavItem === 'Action' ? 'active' : ''}`} 
              onClick={() => handleNavItemClick('Action')}>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action-2" className={`nav-dropdown-link ${activeNavItem === 'Another action' ? 'active' : ''}`} 
              onClick={() => handleNavItemClick('Another action')}>Another action</NavDropdown.Item>
              <DropdownDivider />
              <NavDropdown.Item href="#action-3" className={`nav-dropdown-link ${activeNavItem === 'Something else' ? 'active' : ''}`} 
              onClick={() => handleNavItemClick('Something else')}>Something else</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action6" className={`nav-link mx-3 ${activeNavItem === 'Contacts' ? 'active' : ''}`}
             onClick={() => handleNavItemClick('Contacts')}>Contacts</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search..."  
                className="me-2 my-auto"
                aria-label="Search"
                style={{ borderColor: '#ffc107', fontStyle: "italic" }}
              />
              <Button variant="outline-warning"  className="mx-1 my-auto"><BsSearch /></Button> 
            </Form>
          </div>
          <div className="d-flex align-items-center">
            <Image
              src="/assets/profile.png"
              roundedCircle
              style={{ width: '50px', height: '50px', cursor: 'pointer', marginLeft: '50px' }}
              onClick={handleProfileClick}
            />

            {showProfileDropdown && (
              <NavDropdown
                show={showProfileDropdown}
                align="end"
                onSelect={() => setShowProfileDropdown(false)}
                ref={dropdownRef}
                style={{ marginRight: '100px' }}
              >
                <NavDropdown.Item href="#action-5">Edit Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action-6">Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action-7">Logout</NavDropdown.Item>
              </NavDropdown>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
