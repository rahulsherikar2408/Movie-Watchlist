import React, { useState ,useEffect } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination';

function Movies({ watchList, category, handleAddToWatchList, handleRemoveFromWatchList }) {

  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);


  const getTrendingMoviesData = async() => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=a9fe70b9e2d00af74cda9df5cf32b8e4&language=en-US&page=${pageNo}`);
      console.log(response.data.results)
      setMovies(response.data.results)
    } catch (error) {
      console.log("Error fetching data from API:", error);
    }
  }

  const getPopularMoviesData = async() => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a9fe70b9e2d00af74cda9df5cf32b8e4&language=en-US&page=${pageNo}`);
      console.log(response.data.results)
      setMovies(response.data.results)
    } catch (error) {
      console.log("Error fetching data from API:", error);
    }
  }

  const getTopRatedMoviesData = async() => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=a9fe70b9e2d00af74cda9df5cf32b8e4&language=en-US&page=${pageNo}`);
      console.log(response.data.results)
      setMovies(response.data.results)
    } catch (error) {
      console.log("Error fetching data from API:", error);
    }
  }

  useEffect(() => {
    switch(category) {
      case 'Popular Movies':
        getPopularMoviesData();
        break;
      case 'Top Rated Movies':
        getTopRatedMoviesData();
        break;
      default:
        getTrendingMoviesData();
        break;
    }
  }, [pageNo,category])

  return (
    <div className='p-5'>
      <div className='text-2xl m-5 font-bold text-center'>{category==='Category'?('Trending Movies'):category}</div>
      <div className='flex flex-row flex-wrap justify-start'>{movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} title={movie.title} poster_path={movie.poster_path} handleAddToWatchList = {handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList} />
        })}</div>
      <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  )
}

export default Movies

