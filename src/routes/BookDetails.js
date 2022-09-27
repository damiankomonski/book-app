import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import { Col, Spinner } from "react-bootstrap";
import BookHero from '../components/BookHero/BookHero';
import NoCoverImg from "../img/no-cover.png";

function BookDetails(props) {
    let [bookInfo, setBookInfo] = useState(null);
    let [bookInfoDetails, setBookInfoDetails] = useState(null);
    let [isLoading, setIsLoading] = useState(true);
    let { bookID } = useParams();
    // let navigate = useNavigate();

    function getBookInfo(bookID){
        return fetch("https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=OLID:" + bookID)
            .then(res => res.json())
            .then(data => data["OLID:" + bookID])
            .catch((error) => {
                console.error(error)
            });
    }

    function getBookInfoDetails(bookID){
        return fetch("https://openlibrary.org/api/books?format=json&jscmd=details&bibkeys=OLID:" + bookID)
            .then(res => res.json())
            .then(data => data["OLID:" + bookID])
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        let bookInfoQuery = getBookInfo(bookID);
        let bookInfoDetailsQuery = getBookInfoDetails(bookID);
        let allPromise = Promise.all([bookInfoQuery, bookInfoDetailsQuery]);

        allPromise.then((response) => {
            setBookInfo(response[0]);
            setBookInfoDetails(response[1]);
            setIsLoading(false);
        }).catch((error) => {
            console.error(error);
        });
    }, [bookID]);

    console.log("bookInfo", bookInfo);
    console.log("bookInfoDetails", bookInfoDetails);

    return (
            isLoading ?

            <Col xs={12} className="col-12 d-flex justify-content-center mb-5">
                <Spinner animation="grow" variant="secondary" />
            </Col> :

            <>
                <Breadcrumbs currentPage={bookInfo.title} />
                <BookHero 
                    category={bookInfo.subjects[0]}
                    title={bookInfo.title}
                    description={bookInfoDetails.details.description ? bookInfoDetails.details.description.value : "Sorry, lack of description."}
                    authors={bookInfo.authors}
                    publicationYear={bookInfo.publish_date}
                    covers={bookInfo.cover ? bookInfo.cover.large : NoCoverImg}
                />
            </>
    );
}

export default BookDetails;