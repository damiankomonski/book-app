import React from "react";
import Slider from "./../components/Slider/Slider";
import Search from "./../components/Search/Search";
import AllBooks from "./../components/AllBooks/AllBooks";

function Homepage(){
    return (
        <>
            <Slider />
            <Search />
            <AllBooks />
        </>
    );
}

export default Homepage;