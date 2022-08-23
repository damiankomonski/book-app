import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./LoveBooks.scss";
import BookItem from "./../BookItem/BookItem";

function LoveBooks(){
    let [books, setBooks] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

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
        let booksData = [];

        getLoveBooks()
            .then((data) => {
                booksID = data;
                let allPromises = [];

                booksID.forEach((element) => {
                    allPromises.push(getBook(element));

                    // getBook(element)
                    //     .then((response) => {
                    //         booksData.push(response);
                    //         console.log(booksData);
                    //     });
                });

                Promise.all(allPromises)
                    .then(values => {
                        setBooks(values);
                        setIsLoading(false);
                    });
        });
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>Love books</h2>
                    </Col>
                </Row>
                <Row>
                    {isLoading ?

                    <Col xs={12} className="col-12 d-flex justify-content-center mb-5">
                        <Spinner animation="grow" variant="secondary" />
                    </Col> :
                    
                    books.map(element => <BookItem key={element.key} cover={element.cover.large} category={element.subjects[0].name} title={element.title} authors={element.authors[0].name} publishDate={element.publish_date} publishers={element.publishers[0].name} />)
                    }
                </Row>
            </Container>
        </div>
    );
}

export default LoveBooks;   