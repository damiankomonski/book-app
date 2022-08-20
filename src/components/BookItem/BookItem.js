import React from "react";
import "./BookItem.scss";
import { Col } from "react-bootstrap"

function BookItem(){
    return (
        <Col xs={6} md={4} lg={3} className="mb-5">
            <div className="d-flex justify-content-center mb-24 overflow-lg-auto">
                <img style={{width: "190px"}} className="h-auto" src="https://covers.openlibrary.org/b/id/805641-L.jpg" alt="Book cover" />
            </div>
            <div>
                <p className="fs-14 mb-8 text-grey">JavaScript (Computer program language)</p>
                <h3 className="fs-16 mb-8">Senhor dos Aneis</h3>
                <p className="fs-14 text-grey mb-4">J.R.R. Tolkien, Ian Holm, John Le Mesurier, Michael Hordern, Peter Woodthorpe, Robert Stephens</p>
                <p className="fs-14 mb-3">1996, O'Reilly & Associates</p>
                <a href="/"><i className="bi-bag me-1"></i> Buy book</a>
            </div>
        </Col>
    );
}

export default BookItem;