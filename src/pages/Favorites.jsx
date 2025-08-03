import { useMovies } from "../contexts/MovieContext";
import NavBar from "../components/NavBar";
import Grid from "../components/Grid";
import "../css/style.css";

function Favorites() {
  const { favorites} = useMovies();

  return (
    <>
      <NavBar/>
      <Grid movies = {favorites}/>
    </>
  );
}

export default Favorites;
