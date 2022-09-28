import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound(){
    return (
        <main>
            <section className="my-3">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1>Page not found</h1>
                            <p>Sorry, you used wrong address.</p>
                            <Link to="/">Back to homepage</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    );
}

export default NotFound;