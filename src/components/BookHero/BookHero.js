import React from 'react';
import "./BookHero.scss";
import { Container, Row, Col } from "react-bootstrap";
import BookGallery from '../BookGallery/BookGallery';

function BookHero(props) {
    return (
        <section>
            <Container>
                <Row>
                    <BookGallery covers={props.covers} />
                    
                    <Col xl={6}>
                        <p>{props.category.name}</p>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>

                        <Row>
                            <Col lg={6}>
                                <p className="text-dark"><strong>Authors:</strong></p>
                                <p>{props.authors.map(element => element.name)}</p>
                            </Col>
                            <Col lg={6}>
                                <p className="text-dark"><strong>The year of publishment:</strong></p>
                                <p>{props.publicationYear}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default BookHero;