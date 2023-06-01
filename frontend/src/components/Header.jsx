import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
const Header = () => {
    return(
        <header>
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand>ProShop</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
           
          </Nav>
          <Nav>
          <LinkContainer to='/cart'>
            <Nav.Link>
                <i className='fas fa-shopping-cart'></i> 
                cart
            </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
            <Nav.Link>
            <i className='fas fa-user'></i> 
              Sign In
            </Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
    )
}

export default Header;