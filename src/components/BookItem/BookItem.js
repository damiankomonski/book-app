import React from "react";
import "./BookItem.scss";

function BookItem(){
    return (
        <>
            <div className="d-flex justify-content-center mb-24">
                <img style={{width: "190px"}} className="h-auto" src="https://covers.openlibrary.org/b/id/805641-L.jpg" alt="Book cover" />
            </div>
            <div>
                <p>JavaScript (Computer program language)</p>
                <h3>Senhor dos Aneis</h3>
                <p>J.R.R. Tolkien, Ian Holm, John Le Mesurier, Michael Hordern, Peter Woodthorpe, Robert Stephens</p>
                <p>1996, O'Reilly & Associates</p>
                <a href=""><i className="bi-bag "></i> Buy book</a>
            </div>
        </>
    );
}

export default BookItem;