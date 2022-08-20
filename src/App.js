import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./routes/Homepage";
import About from "./routes/About";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
