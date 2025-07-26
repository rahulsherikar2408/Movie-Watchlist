import React from 'react'

function Banner() {
    return (
        <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{ backgroundImage: `url(https://i0.wp.com/thetechnovore.com/wp-content/uploads/2019/04/D40BuNcWAAEVP4r.jpg)` }}>
            <div className='w-full text-white text-4xl text-center bg-gray-900/60 p-4'>Avenger Endgame</div>
        </div>  

    )
}

export default Banner