import { useLocation, useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieInfo({ watchList, handleAddToWatchList, handleRemoveFromWatchList }) {

    const [movieData, setMovieData] = useState([])
    const movieId = useParams().id;
    const movie = useLocation().state?.movie;
    const navigate = useNavigate();

    function doesContains() {
        for (let i = 0; i < watchList.length; i++) {
            if (watchList[i].id === movieData.id) {
                return true;
            }
        }
        return false;
    }

    const getMovieInfoData = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a9fe70b9e2d00af74cda9df5cf32b8e4&language=en-US`);
            console.log(response.data);
            setMovieData(response.data);
        }
        catch (error) {
            console.log("Error fetching movie data:", error);
        }
    }

    useEffect(() => {
        getMovieInfoData()
    }, [])

    return (
        <>
            <div onClick={() => navigate(-1)} className="ml-12 mt-7 mx-10 w-[40px] h-[40px] rounded-4xl text-md bg-gray-100 flex justify-center items-center hover:cursor-pointer hover:scale-115 duration-200"><i className="fa-solid fa-arrow-left"></i></div>
            <div className="ml-10 mr-10 flex flex-row flex-wrap justify-center items-start">
                <div className="m-5 flex flex-col items-center">
                    <img className="w-[270px] h-[380px] rounded-xl object-cover" src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} alt={movieData.title} />
                    {doesContains() ? (<button onClick={() => handleRemoveFromWatchList(movie)} className="w-[270px] h-[45px] mt-2 bg-red-500/90 text-white font-bold text-md rounded-lg cursor-pointer transform transition-all duration-300">Delete From Watchlist</button>) : (<button onClick={() => handleAddToWatchList(movie)} className="w-[270px] h-[45px] mt-2 bg-green-500/90 text-white font-bold text-md rounded-lg cursor-pointer transform transition-all duration-300">Add To Watchlist</button>)}

                </div>
                <div className="w-[600px] flex flex-col flex-wrap items-start gap-3">
                    <h1 className="text-xl font-bold text-center mt-5 justify-items-start">{movieData.title}</h1>
                    <p className="-ml-1 text-lg"><i class="fa-solid fa-star fa-lg" style={{ color: '#FFD43B' }}></i> {Math.round(movieData.vote_average * 10) / 10}/10 - Votes:{movieData.vote_count}</p>
                    <ul className="flex flex-row flex-wrap justify-center items-start list-disc ml-5 gap-12 text-lg">
                        {movieData.genres?.map((genre) => {
                            return <li key={genre.id}>{genre.name}</li>
                        })}
                    </ul>
                    <p className="text-lg">{movieData.overview}</p>
                </div>
            </div>
        </>

    )
}

export default MovieInfo;


// https://api.themoviedb.org/3/movie/1061474?api_key=a9fe70b9e2d00af74cda9df5cf32b8e4&language=en-US