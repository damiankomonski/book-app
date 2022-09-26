import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { Col, Spinner } from "react-bootstrap";
import BookHero from '../components/BookHero/BookHero';

function BookDetails(props) {
    let [bookInfo, setBookInfo] = useState(null);
    let [bookInfoDetails, setBookInfoDetails] = useState(null);
    let [isLoading, setIsLoading] = useState(true);
    let { bookID } = useParams();
    let navigate = useNavigate();

    function getBookInfo(bookID){
        return fetch("https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=OLID:" + bookID)
            .then(res => res.json())
            .then(data => data["OLID:" + bookID]);
    }

    function getBookInfoDetails(bookID){
        return fetch("https://openlibrary.org/api/books?format=json&jscmd=details&bibkeys=OLID:" + bookID)
            .then(res => res.json())
            .then(data => data["OLID:" + bookID]);
    }
    

    useEffect(() => {
        let bookInfoQuery = getBookInfo(bookID);
        let bookInfoDetailsQuery = getBookInfoDetails(bookID);

        bookInfoQuery.then(response => {
            if(Object.keys(response).length === 0){
                navigate("/page-not-found");
            }

            setBookInfo(response);
        });
    }, []);

    return (
            isLoading ?

            <Col xs={12} className="col-12 d-flex justify-content-center mb-5">
                <Spinner animation="grow" variant="secondary" />
            </Col> :

            <>
                <Breadcrumbs currentPage={bookInfo.title} />
                <BookHero covers={bookInfo.cover} category={bookInfo.subjects[0]} title={bookInfo.title} />
            </>
    );
}

export default BookDetails;