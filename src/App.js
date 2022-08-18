import './App.scss';
import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import Search from "./Search/Search";
import Results from "./Results/Results";
import Footer from "./Footer/Footer";

/*
API Link:
https://openlibrary.org/dev/docs/api/search
*/

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Search />
      <Results />
      <Footer />
    </>
  );
}

export default App;
