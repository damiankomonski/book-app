import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./ArtsBooks.scss";
import BookItem from "./../BookItem/BookItem";
import NoCoverImg from "./../../img/no-cover.png";

function ArtsBooks(){
    let [books, setBooks] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    function getArtsBooks(){
        let worksIDs = [];

        return fetch("http://openlibrary.org/subjects/arts.json?limit=4")
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

    function getBooks(bookIDs){
        let bookIDsText = bookIDs.join(',OLID:');
        let booksDataArray = [];

        return fetch("https://openlibrary.org/api/books?jscmd=data&bibkeys=OLID:" + bookIDsText + "&format=json")
            .then(response => response.json())
            .then((data) => {
                for (let property in data){
                    booksDataArray.push(data[property])
                }

                return booksDataArray;
            });
    }

    useEffect(() => {

        getArtsBooks()
            .then((data) => {
                let promisesArray = [];

                data.forEach(element => {
                    promisesArray.push(getBookIDFromWork(element));    
                })

                return Promise.all(promisesArray);
            })
            .then(response => {
                let bookIDs = response;
                let booksPromise = getBooks(bookIDs);

                return booksPromise;
            })
            .then(response => {
                setIsLoading(false);
                setBooks(response)
            });
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>Arts books</h2>
                    </Col>
                </Row>
                <Row>
                    {isLoading ?

                    <Col xs={12} className="col-12 d-flex justify-content-center mb-5">
                        <Spinner animation="grow" variant="secondary" />
                    </Col> :
                    
                    books.map(element => <BookItem key={element.key} itemID={element.key.slice(7)} category={element.subjects[0]} cover={element.cover ? element.cover.large : NoCoverImg} title={element.title} authors={element.authors} publishDate={element.publish_date} publishers={element.publishers} />)
                    }
                </Row>
            </Container>
        </div>
    );
}

export default ArtsBooks;   