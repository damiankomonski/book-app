import React from 'react';
import "./BookGallery.scss";
import { Col } from "react-bootstrap";

function BookGallery(props) {
    return (
        <Col xl={4} className="d-flex justify-content-center">
            <img src={props.covers} alt="" />
        </Col>
    );
}

export default BookGallery;