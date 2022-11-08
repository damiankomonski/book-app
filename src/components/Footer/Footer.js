import React from "react";
import "./Footer.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Footer(){
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={12} className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <p className="col-md-4 mb-0 text-muted">© 2022 Books Finder. All rights reserved.</p>

                        <ul className="nav col-md-4 justify-content-end">
                            <li className="nav-item">
                                {/* <Link to="/" className="nav-link px-2 text-muted">Homepage</Link> */}
                            </li>
                            <li className="nav-item">
                                {/* <Link to="/about" className="nav-link px-2 text-muted">About project</Link>     */}
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;