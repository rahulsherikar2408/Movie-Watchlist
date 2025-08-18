import React, { useState, useEffect } from 'react'
import genreIds from '../utility/genre';

function Watchlist({ watchList, setWatchList, handleRemoveFromWatchList }) {

  const [search,setSearch] = useState("")
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  }

  const handleSearchMovieChange = (e) => {
    setSearch(e.target.value);
    setCurrGenre("All Genres");
  }

  const sortIncreasing = () => {
    let sortedIncreasing = watchList.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedIncreasing])
  }

  const sortDecreasing = () => {
    let sortedDecreasing = watchList.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average
    })
    setWatchList([...sortedDecreasing])
  }

  useEffect(() => {
    let temp = watchList.map((movie) => {
      return genreIds[movie.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenreList(["All Genres",...temp])
  }, [watchList])

  return (
    <>

      <div className='flex justify-center flex-wrap m-5'>
        {genreList.map((genre) => {
          return (
            <div onClick={()=>handleFilter(genre)} className={ (currGenre===genre)?'flex justify-center items-center mr-4 my-2 h-[50px] w-[150px] bg-blue-400 rounded-xl text-white text-xl font-bold hover:bg-blue-400 cursor-pointer duration-200 hover:scale-110' : 'flex justify-center items-center mr-4 my-2 h-[50px] w-[150px] bg-gray-400/50 rounded-xl text-white text-xl font-bold hover:bg-blue-400 cursor-pointer duration-200 hover:scale-110'}>{genre}</div>
          )
        })}
        
      </div>

      <div className='flex justify-center my-5'>
        <input onChange={handleSearchMovieChange} value={search} className='bg-gray-200 h-[50px] w-[300px] text-xl px-4 outline-none' placeholder='Search for Movies' type="text" />
      </div>

      <div className='overflow-hidden rounded-lg m-8 border border-gray-200 shadow-md'>
        <table className='w-full text-2xl text-gray-700 text-center'>
          <thead className='border-b-2 border-gray-200'>
            <tr>
              <th className='p-3'>Name</th>
              <th className='flex justify-center items-center p-3 space-x-3'>
                <div onClick={sortIncreasing} className='hover:cursor-pointer'><i class="fa-solid fa-arrow-up"></i></div>
                <div>Rating</div>
                <div onClick={sortDecreasing} className='hover:cursor-pointer'><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          {watchList.filter((movie) => {
            return (currGenre !== "All Genres")? genreIds[movie.genre_ids[0]] === currGenre : true
          }).filter((movie) => {
            return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
          }).map((movie) => {
            return (
              <tbody>
                <tr className='border-b-2 border-gray-200'>
                  <td className='flex items-center px-6 py-4'>
                    <img className='h-[10rem] w-[10rem] m-2 rounded-lg' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                    <div className='mx-10'>{movie.title}</div>
                  </td>
                  <td>{Math.round(movie.vote_average*10)/10}</td>
                  <td>{movie.popularity}</td>
                  <td>{genreIds[movie.genre_ids[0]]}</td>
                  <td onClick={() => handleRemoveFromWatchList(movie)} className='text-red-800 hover:cursor-pointer'>Delete</td>
                </tr>
              </tbody>
            )
          })}

        </table>
      </div>
    </>

  )
}

export default Watchlist;

{/* <i class="fa-solid fa-arrow-up"></i>
<i class="fa-solid fa-arrow-down"></i> */}