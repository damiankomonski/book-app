import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./LoveBooks.scss";
import BookItem from "./../BookItem/BookItem";

function LoveBooks(){
    // const [books, setBooks] = useState(null);

    function getBook(workID){
        let BookID = null;

        fetch("http://openlibrary.org/search.json?q=" + workID).then(res => res.json()).then(data => {
            BookID = data.docs[0].seed[0].substr(7);

            console.log(BookID);

            fetch("https://openlibrary.org/api/books?bibkeys=OLID:" + BookID).then(res => res.json()).then(data => console.log(data));
        });
    };

    useEffect(() => {
        let booksData = null;

        let query = fetch("http://openlibrary.org/subjects/love.json?limit=8");    
        query.then(res => res.json()).then((data) => {
            booksData = data;
            console.log(booksData.works[0].key.substr(7));
            getBook(booksData.works[0].key.substr(7));
        });
    });

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h2>Love books</h2>
                    </Col>
                </Row>
                <Row>
                    <BookItem />
                </Row>
            </Container>
        </div>
    );
}

export default LoveBooks;