import { fetchTrendingMovies, searchMovies} from "../services/api";
import { useMovies } from "../contexts/MovieContext";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Grid from "../components/Grid";
// import "../css/Home.css"

function Home() {
  const [movies, setMovies] = useState([]);
  const {favorites, toggleFavorite} = useMovies();

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className="bg">
      <Header onSearch={handleSearch} />
      <Grid movies={movies} />
    </div>
  );
}

export default Home;
