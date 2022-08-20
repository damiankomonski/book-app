import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ArtsBooks.scss";
import BookItem from "./../BookItem/BookItem";

function ArtsBooks(){

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>Arts books</h2>
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

export default ArtsBooks;