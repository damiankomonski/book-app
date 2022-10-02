import React, { useContext, useEffect } from "react";
import "./BookItem.scss";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoriesContext from "../../context/categoryContext";

function BookItem(props){
    console.log(props);
    const categories = useContext(CategoriesContext);
    // let categoryName = convertCategoryIDToCategoryName(props.category[0]);

    function convertCategoryIDToCategoryName(categoryID){
        let ID = "";
        
        return categories[ID];
    }

    function checkDate(date){
        
    }

    function getYear(date){
        const dateObject = new Date(date);

        return dateObject.getFullYear();
    }

    return (
        <Col xs={6} md={4} lg={3} className="mb-5">
            <div className="d-flex justify-content-center mb-24 overflow-lg-auto">
                <Link to={"/books/" + props.itemID}>
                    <img className="h-180 h-sm-268 w-auto" src={props.cover} alt="Book cover" />
                </Link>
            </div>
            <div>
                <p className="fs-14 mb-8 text-grey">{props.category}</p>
                <h3 className="fs-16 mb-8"><Link to={"/books/" + props.itemID} className="text-dark">{props.title}</Link></h3>
                <p className="fs-14 text-grey mb-4">{props.authors.map(element => element.name).join(', ')}</p>
                <p className="fs-14 mb-3">{getYear(props.publishDate)}, {props.publishers[0]}</p>
            </div>
        </Col>
    );
}

export default BookItem;