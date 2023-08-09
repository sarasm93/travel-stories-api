import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import navStyles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png";
import Image from 'react-bootstrap/Image';
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <Container>
        <Navbar className={`${navStyles.NavBar} shadow-sm`} expand="md" fixed="top">
            <NavLink className={navStyles.NavLogo} to="/">
                <Image roundedCircle src={logo} alt="logo" height="45" /><Navbar.Brand>  Travel Stories</Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink 
                        exact
                        to="/" 
                        className={navStyles.NavLink}
                        activeClassName={navStyles.Active}
                    >Home</NavLink>
                    <NavLink 
                        to="/login"
                        className={navStyles.NavLink}
                        activeClassName={navStyles.Active}
                    >Log In</NavLink>
                    <NavLink 
                        to="/signup"
                        className={navStyles.NavLink}
                        activeClassName={navStyles.Active}
                    >Sign Up</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Container>
  )
}

export default NavBar;