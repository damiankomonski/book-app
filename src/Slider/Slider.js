import React from "react";
import "./Slider.scss"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Slider(){
    return (
        <section className="my-4">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="display-5 fw-bold">Search book and read!</h1>
                        <div className="col-lg-6">
                            <p className="lead">Find book you that interests you.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Slider;