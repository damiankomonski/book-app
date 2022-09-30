import React from "react";
import "./Header.scss"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function Header(){
    return (
        <header className="mb-40">
            <Navbar bg="white" expand="lg">
                <Container>
                    <Link to="/" className="navbar-brand">Books Finder</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link" data-rr-ui-event-key="/">Homepage</NavLink>
                            <NavDropdown title="Categories" id="navbarScrollingDropdown">
                                <Link to="/books/" className="dropdown-item" role="button" tabIndex="0">All</Link>
                                {/* <Link to="#" className="dropdown-item" role="button" tabIndex="0">Computer science, knowledge & systems</Link> */}
                                {/* <Link to="#" className="dropdown-item" role="button" tabIndex="0">Philosophy & psychology</Link> */}
                                {/* <Link to="#" className="dropdown-item" role="button" tabIndex="0">Religion</Link> */}
                                {/* <Link to="#" className="dropdown-item" role="button" tabIndex="0">Social sciences</Link> */}
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