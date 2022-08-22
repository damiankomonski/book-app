import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./LoveBooks.scss";
import BookItem from "./../BookItem/BookItem";

function LoveBooks(){
    let [books, setBooks] = useState([]);

    function getLoveBooks(amountBooks){
        let worksIDs = [];

        return fetch("http://openlibrary.org/subjects/love.json?limit=" + amountBooks)
            .then(response => response.json())
            .then((data) => {
                worksIDs = data.works.map(element => element.key.slice(7));
                return worksIDs;
            });
    }

    function getBookFromWork(workID){

    }

    useEffect(() => {
        getLoveBooks(8).then((data) => {

            console.log(data);

            data.forEach((element) => {
                getBookFromWork(element);
            });

        });
    });

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>Love books</h2>
                    </Col>
                </Row>
                <Row>
                    <BookItem />
                </Row>
            </Container>
        </div>
    );
}

export default LoveBooks;