
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import ReactDOM from 'react-dom'


const Header = () => {
  return <div >

     <Navbar bg="dark" variant="dark" >
    <Navbar.Brand as = {Link} to="/" id="navbar-brand">DocMe</Navbar.Brand>
     <div className="container">
    <Nav className="me-auto">
      <Nav.Link as = {Link} to="/">Waiting List</Nav.Link>
      <Nav.Link as={Link} to= "/addTo-Do" >Add a patient</Nav.Link>
      
    </Nav>
    </div>
  </Navbar>  
  </div>;
};

export default Header;
