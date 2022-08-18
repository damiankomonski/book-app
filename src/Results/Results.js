import React from "react";
import "./Results.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Results(){
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <p>Founded 150 books</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <p>Book</p>
                    </Col>
                    <Col xs={6}>
                        <p>Book</p>
                    </Col>
                    <Col xs={6}>
                        <p>Book</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Results;