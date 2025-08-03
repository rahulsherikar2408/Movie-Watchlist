import React from 'react'
import Watchlist from './Watchlist';

function MovieCard({ movie, title, poster_path, watchList, handleAddToWatchList, handleRemoveFromWatchList }) {

  function doesContains() {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className='h-[40vh] w-[250px] m-4 rounded-2xl bg-cover bg-center flex items-end flex-col justify-between hover:scale-110 duration-300 hover:cursor-pointer' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})` }}>

      {doesContains(movie) ? (<div onClick={() => (handleRemoveFromWatchList(movie))} className='m-4 flex justify-center h-9 w-9 text-xl items-center rounded-lg bg-gray-900/60 '>&#10060;</div>) : (<div onClick={() => (handleAddToWatchList(movie))} className='m-4 flex justify-center h-9 w-9 text-xl items-center rounded-lg bg-gray-900/60 '>&#128525;</div>)}
      <div className='w-full text-white text-2xl text-center bg-gray-900/60 rounded-b-2xl p-2'>{title}</div>
    </div>
  )
}

export default MovieCard;


{/* <i class="fa-solid fa-plus" style={{color: '#ffffff'}}></i> */ }