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
import ComputerScienceBooks from "./routes/ComputerScienceBooks";
import PhilosophyAndPsychologyBooks from "./routes/PhilosophyAndPsychologyBooks";
import ReligionBooks from './routes/ReligionBooks';

const categories = {
  "000": "Computer science, information & general works"
};
const CategoryContext = React.createContext();

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
        <Route path="/computer-science" element={<ComputerScienceBooks />} />
        <Route path="/philosophy-and-psychology" element={<PhilosophyAndPsychologyBooks />} />
        <Route path="/religion" element={<ReligionBooks />} />
        <Route path="/books/:bookID" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
