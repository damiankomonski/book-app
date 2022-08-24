import React from 'react';
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Breadcrumbs(props) {
    return (
        <section className="my-3">
            <Container>
                <Row>
                    <Col xs={12}>
                        <Breadcrumb>
                            <li className="breadcrumb-item">
                                <Link to="/">Homepage</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/">Books</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/">Category name</Link>
                            </li>
                            <Breadcrumb.Item active>{props.currentPage}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Breadcrumbs;