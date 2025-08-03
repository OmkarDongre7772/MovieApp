import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function MovieCard({ movie, toggleFavorite, isFavorite, className = "" }) {
  return (
    <div className={`card ${className}`}>
      <img
        className="card-poster"
        src={movie.poster}
        alt={movie.title}
        loading="lazy"
      />
      <div className="card-body">
        <h3 className="card-title">{movie.title}</h3>
        {movie.release_date && (
          <p className="card-date">{movie.release_date}</p>
        )}
        <button
          className="heart-btn"
          onClick={() => toggleFavorite(movie)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? <FaHeart className="heart filled" /> : <FaRegHeart className="heart" />}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;