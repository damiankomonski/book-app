import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ITBooks.scss";
import BookItem from "./../BookItem/BookItem";

function ITBooks(){

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>IT books</h2>
                    </Col>
                </Row>
                <Row>
                    <BookItem />
                    <BookItem />
                    <BookItem />
                    <BookItem />
                </Row>
            </Container>
        </div>
    );
}

export default ITBooks;