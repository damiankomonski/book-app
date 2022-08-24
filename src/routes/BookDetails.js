import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { Col, Spinner } from "react-bootstrap";
import BookHero from '../components/BookHero/BookHero';

function BookDetails(props) {
    let [bookDetails, setBookDetails] = useState(null);
    let [isLoading, setIsLoading] = useState(true);
    let { bookID } = useParams();
    let navigate = useNavigate();

    function getBookDetails(bookID){
        return fetch("https://openlibrary.org/api/books?jscmd=details&format=json&bibkeys=OLID:" + bookID)
            .then(res => res.json())
            .then(data => data["OLID:" + bookID]);
    }

    useEffect(() => {
        let bookDetailsQuery = getBookDetails(bookID);

        bookDetailsQuery.then(response => {
            if(Object.keys(response).length === 0){
                navigate("/page-not-found");
            }

            setBookDetails(response);
            setIsLoading(false);
            console.log(response);
        });
    }, [bookID, navigate]);

    return (
            isLoading ?

            <Col xs={12} className="col-12 d-flex justify-content-center mb-5">
                <Spinner animation="grow" variant="secondary" />
            </Col> :

            <>
                <Breadcrumbs currentPage={bookDetails.details.title} />
                <BookHero />
            </>
    );
}

export default BookDetails;