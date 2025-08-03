import MovieCard from "./MovieCard";
import { useMovies } from "../contexts/MovieContext";
// import "../css/Grid.css"; // Uncomment if you have specific grid styles

function Grid({ movies }) {
  const { favorites, toggleFavorite } = useMovies();

  return (
    <div className="Grid">
      {movies.length === 0 
        ? (<p className="Grid-message">No movies found.</p>) 
        : (movies.map((movie) => {
            const posterUrl = movie.poster
              ? movie.poster
              : movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/200x300?text=No+Image";

            return (
              <MovieCard
                className="card"
                key={movie.id}
                movie={{
                  ...movie,
                  poster: posterUrl,
                }}
                toggleFavorite={toggleFavorite}
                isFavorite={favorites.some((fav) => fav.id === movie.id)}
              />
            );
          })
        )}
    </div>
  );
}

export default Grid;
