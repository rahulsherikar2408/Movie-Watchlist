import React from 'react'
import Watchlist from './Watchlist';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie, title, poster_path, watchList, handleAddToWatchList, handleRemoveFromWatchList }) {

  const navigate = useNavigate();

  function doesContains() {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div onClick={() => navigate(`/movieinfo/${movie.id}`, { state: { movie } })} className='h-[40vh] w-[165px] m-3 rounded-xl bg-cover bg-center flex items-end flex-col justify-between hover:scale-110 duration-300 hover:cursor-pointer' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})` }}>
      {doesContains(movie) ? (<div onClick={(e) => {e.stopPropagation();handleRemoveFromWatchList(movie);}} className='m-2 flex justify-center h-6 w-6 text-sm items-center rounded-md bg-gray-900/60 '>&#10060;</div>) : (<div onClick={(e) => {e.stopPropagation();handleAddToWatchList(movie)}} className='m-2 flex justify-center h-6 w-6 text-sm items-center rounded-md bg-gray-900/60 '>&#128525;</div>)}
      <div className='w-full text-white text-md text-center bg-gray-900/60 rounded-b-2xl p-1'>{title}</div>
    </div>
  )
}

export default MovieCard;


{/* <i class="fa-solid fa-plus" style={{color: '#ffffff'}}></i> */ }