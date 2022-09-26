import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./routes/Homepage";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import BookDetails from "./routes/BookDetails"

/*
API Link:
https://openlibrary.org/dev/docs/api/search
*/

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/art" element={<ArtBooks />} /> */}
        <Route path="/books/:bookID" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
