import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./LoveBooks.scss";
import BookItem from "./../BookItem/BookItem";

function LoveBooks(){
    let [books, setBooks] = useState([]);
    let [isLoader, setIsLoaded] = useState(false);

    function getLoveBooks(){
        let booksIDs = [];

        return fetch("http://openlibrary.org/subjects/love.json?limit=8")
            .then(response => response.json())
            .then((data) => {
                booksIDs = data.works.map(element => element.lending_edition);
                return booksIDs;
            });
    }

    function getBook(bookID){
        return fetch("https://openlibrary.org/api/books?jscmd=data&bibkeys=OLID:" + bookID + "&format=json")
            .then(response => response.json())
            .then((data) => {
                let key = "OLID:" + bookID;
                return data[key];
            });
    }

    useEffect(() => {
        let booksID = [];

        getLoveBooks()
            .then((data) => {
                booksID = data;

                booksID.forEach((element) => {
                    getBook(element)
                        .then((response) => {
                            let booksArray = books;
                            booksArray.push(response);

                            setBooks(booksArray);

                            console.log(books);
                        });
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