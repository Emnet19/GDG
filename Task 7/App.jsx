import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import Watchlist from "./Watchlist";
import './App.css'

export default function App() {
  const [watchlist, setWatchlist] = useState([]);

  // Load watchlist from local storage on page load
  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    if (savedWatchlist) setWatchlist(savedWatchlist);
  }, []);

  // Save watchlist to local storage when updated
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Function to add movie to watchlist
  const addToWatchlist = (movie) => {
    if (!watchlist.some((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div>
      <h1>🎬 Movie Watchlist</h1>
      <MovieList addToWatchlist={addToWatchlist} />
      <Watchlist watchlist={watchlist} />
    </div>
  );
}
