import React, { useState, useEffect } from "react";
import { Container, Row, Col, Pagination, Spinner } from "react-bootstrap";
import Search from "./../components/Search/Search";
import BookItem from "./../components/BookItem/BookItem";
import NoCoverImage from "./../img/no-cover.png";

function AllBooks(){
    let [books, setBooks] = useState(null);
    let [booksAmount, setBooksAmount] = useState(null);
    let [isLoading, setIsLoading] = useState(true);

    function getAllWorks(){
        return fetch("https://openlibrary.org/search.json?q=ddc:*&sort=new&limit=40&offset=40&fields=seed")
            .then(response => response.json())
            .then(data => data)
            .catch((error) => {
                console.error(error);
            });
    };

    function getBooksFromWorks(worksIDs){
        let booksArray = [];

        return fetch("https://openlibrary.org/api/books?bibkeys=" + worksIDs.join(",") + "&format=json&jscmd=details")
            .then(response => response.json())
            .then((data) => {
                for (let property in data){
                    booksArray.push(data[property]);
                }

                return booksArray;
            });
    }

    useEffect(() => {
        let worksIDs = [];
        let getBooksPromise = null;

        getAllWorks()
            .then((data) => {
                setBooksAmount(data.numFound);

                for(let i = 0; i < data.docs.length; i++){
                    worksIDs.push(data.docs[i].seed[0].slice(7));
                }

                getBooksPromise = getBooksFromWorks(worksIDs);
                return getBooksPromise;
            })
            .then(response => {
                console.log(response);
                setBooks(response);
                setIsLoading(false);
            })
    }, [])

    return (
        <main>
            <section className="mb-40">
                <Container>
                    <Row>
                        <Col xs={12} className="d-flex justify-content-between align-items-end">
                            <h1>All books</h1>
                            {booksAmount ? <p>{booksAmount} collection of books</p> : null}
                        </Col>
                    </Row>
                </Container>
            </section>

            <Search placeholderText="Search in all books" />

            {isLoading ?
            
            <Col xs={12} className="col-12 d-flex justify-content-center mb-5">
                <Spinner animation="grow" variant="secondary" />
            </Col>
            
            :

            <section>
                <Container>
                    <Row>
                        {books.map((element) => {
                            return <BookItem
                                key={element.bib_key}
                                itemID={element.bib_key}
                                cover={element.details.covers ? "https://covers.openlibrary.org/b/id/" + element.details.covers[0] + "-M.jpg" : NoCoverImage}
                                category={element.details.dewey_decimal_class}
                                title={element.details.title}
                                authors={element.details.authors ? element.details.authors : []}
                                publishDate={element.details.publish_date}
                                publishers={element.details.publishers ? element.details.publishers : []}
                            />
                        })}

                        <div className="d-flex justify-content-center mb-80">
                            <Pagination>
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Ellipsis />

                                <Pagination.Item>{10}</Pagination.Item>
                                <Pagination.Item>{11}</Pagination.Item>
                                <Pagination.Item active>{12}</Pagination.Item>
                                <Pagination.Item>{13}</Pagination.Item>
                                <Pagination.Item>{14}</Pagination.Item>

                                <Pagination.Ellipsis />
                                <Pagination.Item>{20}</Pagination.Item>
                                <Pagination.Next />
                            </Pagination>
                        </div>
                    </Row>
                </Container>
            </section>
            }
        </main>
    );
}

export default AllBooks;