import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About(){
    return (
        <main>
            <section className="mt-3">
                <Container>
                    <Row>
                        <Col xs={12} xl={8}>
                            <h1 className="mb-3">About project</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mauris quis velit sollicitudin faucibus. Donec vestibulum aliquam mauris, ut pharetra nisi pharetra eu. Morbi mauris nunc, venenatis sit amet felis nec, ornare placerat risus. Vivamus fringilla in urna vitae egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ultrices augue at consequat condimentum. Vivamus euismod, lorem id elementum dapibus, lacus velit imperdiet eros, ac tempor quam est laoreet orci.</p>
                            <h5>Contact</h5>
                            <p className="mb-0"><a href="mailto:damiankomonski@gmail.com">damiankomonski@gmail.com</a></p>
                            <p><a href="github.com/damiankomonski/" target="_blank">github.com/damiankomonski/</a></p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
        
    );
}

export default About;