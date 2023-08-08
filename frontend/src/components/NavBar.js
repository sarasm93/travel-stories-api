import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png";
import Image from 'react-bootstrap/Image';


const NavBar = () => {
  return (
    <Container>
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Navbar.Brand><Image roundedCircle src={logo} alt="logo" height="45" /> Travel Stories</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Log In</Nav.Link>
                    <Nav.Link>Sign Up</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
  )
}

export default NavBar