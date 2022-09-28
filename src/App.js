import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./routes/Homepage";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import BookDetails from "./routes/BookDetails"
import AllBooks from "./routes/AllBooks";

/*
API Link:
https://openlibrary.org/dev/docs/api/search

Category list:
https://openlibrary.org/classifications/ddc/list
*/

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/books/:bookID" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
