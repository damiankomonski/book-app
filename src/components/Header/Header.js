import React from "react";
import "./Header.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(){
    return (
        <header>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Navbar.Brand href="./">Books Finder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="./">Homepage</Nav.Link>
                            <Nav.Link href="#">About project</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;