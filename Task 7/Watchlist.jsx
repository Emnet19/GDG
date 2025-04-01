import React from "react";

export default function Watchlist({ watchlist }) {
  return (
    <div>
      <h1>My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p>No movies added yet!</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {watchlist.map((movie) => (
            <div key={movie.id} style={{ textAlign: "center" }}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
