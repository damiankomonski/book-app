import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./ITBooks.scss";
import BookItem from "./../BookItem/BookItem";
import NoCoverImg from "./../../img/no-cover.png";

function ITBooks(){
    let [books, setBooks] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    function getITBooks(){
        let worksIDs = [];

        return fetch("http://openlibrary.org/subjects/it.json?limit=4")
            .then(response => response.json())
            .then((data) => {
                worksIDs = data.works.map(element => element.key.slice(7));
                return worksIDs;
            });
    }

    function getBookIDFromWork(workID){
        return fetch("https://openlibrary.org/works/" + workID + "/editions.json?limit=1")
            .then(res => res.json())
            .then(data => data.entries[0].key.slice(7));
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
        let worksIDs = [];

        getITBooks()
            .then((data) => {
                let promisesArray = [];

                data.forEach(element => {
                    promisesArray.push(getBookIDFromWork(element));    
                })

                return Promise.all(promisesArray);
            })
            .then(response => {
                let promisesArray = [];

                response.forEach(element => {
                    promisesArray.push(getBook(element));
                });

                return Promise.all(promisesArray);
            })
            .then(response => {
                setIsLoading(false);
                setBooks(response)
            });
    }, []);

    console.log(books);

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>IT books</h2>
                    </Col>
                </Row>
                <Row>
                    {isLoading ?

                    <Col xs={12} className="col-12 d-flex justify-content-center mb-5">
                        <Spinner animation="grow" variant="secondary" />
                    </Col> :
                    
                    books.map(element => <BookItem key={element.key} category={element.subjects[0]} cover={element.cover ? element.cover.large : NoCoverImg} title={element.title} authors={element.authors} publishDate={element.publish_date} publishers={element.publishers} />)
                    }
                </Row>
            </Container>
        </div>
    );
}

export default ITBooks;   