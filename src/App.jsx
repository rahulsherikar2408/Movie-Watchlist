import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import React from "react";
import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
    console.log(newWatchList)
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<> <Banner/> <Movies handleAddToWatchList={handleAddToWatchList}/> </>} />
          <Route path='/watchlist' element={<Watchlist />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App