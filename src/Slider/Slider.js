import React from "react";
import "./Slider.scss"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Slider(){
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="display-5 fw-bold">Search book and read!</h1>
                        <div className="col-lg-6">
                            <p className="lead mb-4">Find book you are interesting.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Slider;