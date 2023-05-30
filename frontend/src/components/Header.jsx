import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
const Header = () => {
    return(
        <header>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">ProShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
           
          </Nav>
          <Nav>
            <Nav.Link href="/cart">
                <i className='fas fa-shopping-cart'></i> 
                cart
                </Nav.Link>
            <Nav.Link  href="/login">
            <i className='fas fa-user'></i> 
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    )
}

export default Header;