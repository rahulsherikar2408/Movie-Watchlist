import React from "react";
import movieLogo from "../assets/image.png"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="flex shadow-md space-x-8 items-center pl-3 py-4">
            <img className="w-[40px]" src={movieLogo} alt="movie" />
            <Link to="/" className="text-blue-400 font-bold text-4xl">Movies</Link>
            <Link to="/watchlist" className="text-blue-400 font-bold text-4xl">Watchlist</Link>
        </div>
    );
}

export default Navbar;