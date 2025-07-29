import React from 'react'

function MovieCard(props) {

  const {title,poster_path} = props.movie

  return (
    <div className='h-[40vh] w-[250px] m-4 rounded-2xl bg-cover bg-center flex items-end hover:scale-110 duration-300 hover:cursor-pointer' style={{backgroundImage : `url(https://image.tmdb.org/t/p/original${poster_path})`}}>
        <div className='w-full text-white text-2xl text-center bg-gray-900/60 rounded-b-2xl p-2'>{title}</div>
    </div>
  )
}

export default MovieCard