import React from "react";
import "./BookItem.scss";
import { Col } from "react-bootstrap"

function BookItem(props){
    return (
        <Col xs={6} md={4} lg={3} className="mb-5">
            <div className="d-flex justify-content-center mb-24 overflow-lg-auto">
                <img className="h-180 h-sm-268 w-auto" src={props.cover} alt="Book cover" />
            </div>
            <div>
                <p className="fs-14 mb-8 text-grey">{props.category.name}</p>
                <h3 className="fs-16 mb-8">{props.title}</h3>
                <p className="fs-14 text-grey mb-4">{props.authors.map(element => element.name).join(', ')}</p>
                <p className="fs-14 mb-3">{props.publishDate}, {props.publishers[0].name}</p>
                <a href="/"><i className="bi-bag me-1"></i> Buy book</a>
            </div>
        </Col>
    );
}

export default BookItem;