


import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MovieList({ addToWatchlist }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=2c5a388ab1824dd8467badfc103db329")
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", backgroundColor: "#1a1a2e", color: "white", padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>🎬 Popular Movies</h1>
      
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
        gap: "20px", 
        maxWidth: "1000px", 
        margin: "auto"
      }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ 
            background: "#16213e", 
            padding: "15px", 
            borderRadius: "10px", 
            boxShadow: "0px 4px 8px rgba(241, 235, 235, 0.2)",
            textAlign: "center",
          }}>
            <img 
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
              alt={movie.title} 
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3 style={{ fontSize: "1.2rem", margin: "10px 0" }}>{movie.title}</h3>
            <button 
              onClick={() => addToWatchlist(movie)}
              style={{ 
                background: "#e94560", 
                border: "none", 
                padding: "10px 15px", 
                color: "white", 
                cursor: "pointer", 
                borderRadius: "5px", 
                marginTop: "10px", 
                transition: "0.3s"
              }}
              onMouseOver={(e) => e.target.style.background = "#f05969"}
              onMouseOut={(e) => e.target.style.background = "#e94560"}
            >
              ➕ Add to Watchlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


