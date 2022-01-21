import React from "react";
import "./navcomp.css";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
function NavComp() {
  return (
    <Navbar bg="light" expand="lg" className="navComp">
  <Container>
    <Navbar.Brand href=".">BankManager</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href=".">Home</Nav.Link>
        <Nav.Link href="/transact">Transact</Nav.Link>
        <Nav.Link href="/history">History</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default NavComp;
