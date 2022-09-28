import React, { useState, useEffect } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import "./LoveBooks.scss";
import BookItem from "./../BookItem/BookItem";
import NoCoverImg from "./../../img/no-cover.png";

//https://openlibrary.org/search.json?q=ddc:00*&sort=new&limit=4&fields=seed
//https://openlibrary.org/search.json?q=ddc:*&sort=new&limit=4&fields=seed&page=2

function LoveBooks(){
    let [books, setBooks] = useState([]);
    let [isLoading, setIsLoading] = useState(true);

    function getLoveBooks(){
        let worksIDs = [];

        return fetch("http://openlibrary.org/subjects/love.json?limit=4&published_in=2021-2022")
            .then(response => response.json())
            .then((data) => {
                worksIDs = data.works.map(element => element.key.slice(7));
                return worksIDs;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function getBookIDFromWork(workID){
        return fetch("https://openlibrary.org/works/" + workID + "/editions.json?limit=1")
            .then(res => res.json())
            .then(data => data.entries[0].key.slice(7))
            .catch((error) => {
                console.log(error)
            });
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
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getLoveBooks()
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
                console.log(response);
                setBooks(response);
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
                    
                    books.map((element) => {
                        return <BookItem key={element.key}
                            itemID={element.key.slice(7)}
                            category={element.subjects[0]}
                            cover={element.cover ? element.cover.large : NoCoverImg}
                            title={element.title} authors={element.authors}
                            publishDate={element.publish_date}
                            publishers={element.publishers} />
                    })
                    }
                </Row>
            </Container>
        </div>
    );
}

export default LoveBooks;