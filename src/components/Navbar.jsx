import React, { useState } from "react";
import movieLogo from "../assets/image.png";
import { Link } from "react-router-dom";

function Navbar({ category, setCategory }) {
  const [open, setOpen] = useState(false); // dropdown state

  const handleSelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setOpen(false); // close dropdown after selecting
  };

  return (
    <div className="flex items-center justify-between px-8 py-4 sticky top-0 z-50 
                bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200">

      {/* Left side - Logo */}
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-lg shadow-md"
          src={movieLogo}
          alt="movie"
        />
        <Link
          to="/"
          className="text-blue-500 font-extrabold text-3xl hover:text-blue-600 transition"
        >
          Movies
        </Link>
      </div>

      {/* Center - Nav Links */}
      <div className="absolute left-1/4 transform -translate-x-1/4 flex space-x-10">
        <Link
          to="/"
          className="text-gray-700 text-2xl font-semibold hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/watchlist"
          className="text-gray-700 text-2xl font-semibold hover:text-blue-500 transition-colors"
        >
          Watchlist
        </Link>

        {/* Dropdown */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex justify-center items-center space-x-1 cursor-pointer"
          >
            <div className="text-2xl text-gray-700 font-semibold hover:text-blue-500">
              {category}
            </div>
            <div className="mt-1">
              <i className={`fa-solid fa-chevron-${open ? "up" : "down"}`}></i>
            </div>
          </div>

          {/* Dropdown Menu */}
          {open && (
            <ul className="absolute mt-2 bg-white shadow-lg rounded-lg w-60 p-2 z-50">
              <li
                onClick={() => handleSelect("Trending Movies")}
                className="text-2xl text-gray-700 font-semibold hover:text-blue-500 cursor-pointer p-2"
              >
                Trending Movies
              </li>
              <li
                onClick={() => handleSelect("Popular Movies")}
                className="text-2xl text-gray-700 font-semibold hover:text-blue-500 cursor-pointer p-2"
              >
                Popular Movies
              </li>
              <li
                onClick={() => handleSelect("Top Rated Movies")}
                className="text-2xl text-gray-700 font-semibold hover:text-blue-500 cursor-pointer p-2"
              >
                Top Rated Movies
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
