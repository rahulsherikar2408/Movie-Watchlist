import React from "react";
import movieLogo from "../assets/image.png"

function Navbar() {
    return (
        <div className="flex shadow-md space-x-8 items-center pl-3 py-4">
            <img className="w-[50px]" src={movieLogo} alt="movie" />
            <a href="/" className="text-blue-400 font-bold text-5xl">Movies</a>
            <a href="/watchlist" className="text-blue-400 font-bold text-5xl">Watchlist</a>
        </div>
    );
}

export default Navbar;