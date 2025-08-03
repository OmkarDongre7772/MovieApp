import { createContext, useState, useContext, useEffect } from "react";
import "../index.css";

const MovieContext = createContext();

export function MovieProvider({ children }) {

    // update Favorites from the Local Storage
  const [favorites, setFavorites] = useState(() => {
    try{
        const stored = localStorage.getItem("favorites");
    return (stored) ? (JSON.parse(stored)) : [];
    } catch(error){
        console.log("error");
    }
  });

//   Update favorites to the Local Storage on state change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (movie) => {
    const isFav = favorites.some((m) => m.id === movie.id);
    if (isFav) {
      setFavorites((prev) => prev.filter((m) => m.id != movie.id));
    } else {
    const favoriteMovie = {
      id: movie.id,
      title: movie.title,
      poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, // <- this is important
      release_date: movie.release_date,
    };
    setFavorites((prev) => [...prev, favoriteMovie]);
    }
  };

  return (
    <MovieContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}
