import React from "react";
import Slider from "./../components/Slider/Slider";
import Search from "./../components/Search/Search";
import LoveBooks from "./../components/LoveBooks/LoveBooks";
import ITBooks from "./../components/ITBooks/ITBooks";
import ArtsBooks from "./../components/ArtsBooks/ArtsBooks";

function Homepage(){
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

//https://openlibrary.org/search.json?q=ddc:00*&sort=new&limit=4&fields=cover_i,edition_count

export default Homepage;