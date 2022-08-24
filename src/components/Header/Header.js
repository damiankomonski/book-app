import React from "react";
import "./Header.scss"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function Header(){
    return (
        <header>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Link to="/" className="navbar-brand">Books Finder</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link" data-rr-ui-event-key="/">Homepage</NavLink>
                            <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#">All</NavDropdown.Item>
                                <NavDropdown.Item href="#">Arts</NavDropdown.Item>
                                <NavDropdown.Item href="#">IT</NavDropdown.Item>
                                <NavDropdown.Item href="#">Love</NavDropdown.Item>
                            </NavDropdown>
                            <NavLink to="/about" className="nav-link" data-rr-ui-event-key="/about">About project</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;