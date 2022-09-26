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
                        <p className="text-grey">{props.category.name}</p>
                        <h1>{props.title}</h1>
                        <p></p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default BookHero;