import React, { useState, useEffect } from "react";
import Slider from "./../components/Slider/Slider";
import Search from "./../components/Search/Search";
import LoveBooks from "./../components/LoveBooks/LoveBooks";
// import ITBooks from "./../components/ITBooks/ITBooks";
// import ArtsBooks from "./../components/ArtsBooks/ArtsBooks";

function Homepage(){
    const [books, setBooks] = useState(null);

    useEffect(() => {
        fetch("")
    });

    return (
        <>
            <Slider />
            <Search />
            <LoveBooks />
            {/* <ITBooks /> */}
            {/* <ArtsBooks /> */}
        </>
    );
}

export default Homepage;