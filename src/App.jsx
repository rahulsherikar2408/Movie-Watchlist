import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import React, { useEffect } from "react";
import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

  const [watchList, setWatchList] = useState([]);

  const handleAddToWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    localStorage.setItem("movies", JSON.stringify(newWatchList))
    setWatchList(newWatchList);
    console.log(newWatchList)
  }

  const handleRemoveFromWatchList = (movie) => {
    const filteredWatchList = watchList.filter((item) => item.id !== movie.id);
    localStorage.setItem("movies", JSON.stringify(filteredWatchList))
    setWatchList(filteredWatchList);
  }

  useEffect(() => {
    const moviesFromLocalStorage = localStorage.getItem("movies");
    if(!moviesFromLocalStorage){
      return 
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<> <Banner/> <Movies watchList={watchList} handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/> </>} />
          <Route path='/watchlist' element={<Watchlist watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App