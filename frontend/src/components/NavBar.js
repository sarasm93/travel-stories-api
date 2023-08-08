import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png";
import Image from 'react-bootstrap/Image';
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <Container>
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <NavLink className={styles.NavLogo} to="/">
                <Image roundedCircle src={logo} alt="logo" height="45" /><Navbar.Brand>  Travel Stories</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink 
                        exact
                        to="/" 
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                    >Home</NavLink>
                    <NavLink 
                        to="/login"
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                    >Log In</NavLink>
                    <NavLink 
                        to="/signup"
                        className={styles.NavLink}
                        activeClassName={styles.Active}
                    >Sign Up</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
  )
}

export default NavBar