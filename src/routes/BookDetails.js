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
    let navigate = useNavigate();

    function getBookInfo(bookID){
        return fetch("https://openlibrary.org/api/books?jscmd=data&format=json&bibkeys=OLID:" + bookID)
            .then(res => res.json())
            .then(data => data)
            .catch((error) => {
                console.error(error)
            });
    }

    function getBookInfoDetails(bookID){
        return fetch("https://openlibrary.org/api/books?format=json&jscmd=details&bibkeys=OLID:" + bookID)
            .then(res => res.json())
            .then(data => data)
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        let bookInfoQuery = getBookInfo(bookID);
        let bookInfoDetailsQuery = getBookInfoDetails(bookID);
        let bookOlidID = "OLID:" + bookID;
        let allPromise = Promise.all([bookInfoQuery, bookInfoDetailsQuery]);

        allPromise.then((response) => {
            if((Object.keys(response[0]).length === 0) || Object.keys(response[1]).length === 0){
                navigate("/not-found");
            }

            setBookInfo(response[0][bookOlidID]);
            setBookInfoDetails(response[1][bookOlidID]);
            setIsLoading(false);
        }).catch((error) => {
            console.error(error);
        });
    }, [navigate, bookID]);

    console.log("bookInfo", bookInfo);
    console.log("bookInfoDetails", bookInfoDetails);

    return (
            isLoading ?

            <main>
                <Col xs={12} className="col-12 d-flex justify-content-center mb-5">
                    <Spinner animation="grow" variant="secondary" />
                </Col>
            </main> 
            :
            <main>
                {/* <Breadcrumbs currentPage={bookInfo.title} /> */} {/* TODO!!!!!! */}
                <BookHero 
                    category={bookInfo.subjects ? bookInfo.subjects[0] : null}
                    title={bookInfo.title}
                    description={bookInfoDetails.details.description ? bookInfoDetails.details.description.value : "Sorry, lack of description."}
                    authors={bookInfo.authors} // jak nie istnieje to pusta tablica?????
                    publicationYear={bookInfo.publish_date}
                    covers={bookInfo.cover ? bookInfo.cover.large : NoCoverImg}
                />
            </main>
    );
}

export default BookDetails;