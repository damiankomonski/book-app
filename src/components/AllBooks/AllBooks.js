import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AllBooks.scss";
import BookItem from "./../BookItem/BookItem";

function AllBooks(){
    

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>All books</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4} lg={3}>
                        <BookItem />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AllBooks;