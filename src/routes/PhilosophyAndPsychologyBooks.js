import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
// import Search from "./../components/Search/Search";
import BookItem from "./../components/BookItem/BookItem";
import NoCoverImage from "./../img/no-cover.png";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";

function PhilosophyAndPsychologyBooks(){
    let [books, setBooks] = useState(null);
    let [booksAmount, setBooksAmount] = useState(null);
    let [isLoading, setIsLoading] = useState(true);
    let pageBooksSize = 40;
    let currentPage = useRef(null);
    let pagesAmount = useRef(null);
    let [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { search } = useLocation();

    function getAllWorks(page){
        let limit = pageBooksSize;
        let offset = (page - 1) * limit; // calculate page

        return fetch("https://openlibrary.org/search.json?q=ddc:1*%20language:eng&sort=new&limit=" + limit + "&offset=" + offset + "&fields=seed")
            .then(response => response.json())
            .then(data => data)
            .catch((error) => {
                alert("Sorry, overloaded server. Refresh the page.");
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

    function calculatePagesAmount(pageBookSize, booksAmount){
        let pagesAmount = 0;

        pagesAmount = Math.ceil(booksAmount / pageBookSize);
        return pagesAmount;
    }

    function handlePageClick(event){
        setIsLoading(true);
        navigate({pathname: "/philosophy-and-psychology", search: "?page=" + (event.selected + 1)});
    }

    useEffect(() => {
        let worksIDs = [];
        let getBooksPromise = null;
        currentPage.current = parseInt(searchParams.get("page")) || 1;

        getAllWorks(currentPage.current)
            .then((data) => {
                setBooksAmount(data.numFound);
                pagesAmount.current = calculatePagesAmount(pageBooksSize, data.numFound);

                for(let i = 0; i < data.docs.length; i++){
                    worksIDs.push(data.docs[i].seed[0].slice(7));
                }

                getBooksPromise = getBooksFromWorks(worksIDs);
                return getBooksPromise;
            })
            .then(response => {
                setBooks(response);
                setIsLoading(false);
            })
    }, [search])

    return (
        <main>
            <section className="mb-40">
                <Container>
                    <Row>
                        <Col xs={12} className="d-flex justify-content-between align-items-end">
                            <h1>Philosophy & psychology</h1>
                            {booksAmount ? <p>{booksAmount} collection of books</p> : null}
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <Search placeholderText="Search in all books" /> */}

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
                            <ReactPaginate
                                pageCount={pagesAmount.current}
                                forcePage={currentPage.current - 1} 
                                containerClassName="pagination" 
                                pageClassName="page-item" 
                                pageLinkClassName="page-link" 
                                activeClassName="active" 
                                previousClassName="page-item"
                                previousLinkClassName="page-link" 
                                nextClassName="page-item" 
                                nextLinkClassName="page-link" 
                                breakClassName="page-item" 
                                breakLinkClassName="page-link"
                                marginPagesDisplayed={1}
                                pageRangeDisplayed={3} 
                                onPageChange={handlePageClick}
                            />
                        </div>
                    </Row>
                </Container>
            </section>

            }
        </main>
    );
}

export default PhilosophyAndPsychologyBooks;