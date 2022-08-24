import React from 'react';
import "./BookHero.scss";
import { Container, Row, Col } from "react-bootstrap";
import BookGallery from '../BookGallery/BookGallery';

function BookHero(props) {
    return (
        <section>
            <Container>
                <Row>
                    <BookGallery />
                    
                    <Col xl={6}>
                        <p>asfasfasf</p>
                        <h1>Test</h1>
                        <h2>Test dwa</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default BookHero;