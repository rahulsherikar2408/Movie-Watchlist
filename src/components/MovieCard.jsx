import React from 'react'

function MovieCard() {
  return (
    <div className='h-[40vh] w-[250px] m-4 rounded-2xl bg-cover bg-center flex items-end hover:scale-110 duration-300 hover:cursor-pointer' style={{backgroundImage : `url(https://images-cdn.ubuy.co.in/6345f652ec87e81aa558cd24-ubuy-online-shopping.jpg)`}}>
        <div className='w-full text-white text-2xl text-center bg-gray-900/60 rounded-b-2xl p-1'>Joker</div>
    </div>
  )
}

export default MovieCard