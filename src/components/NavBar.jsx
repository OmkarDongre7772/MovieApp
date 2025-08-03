import {Link} from 'react-router-dom'

function NavBar(){

    return(
        <nav >
            <div className="nav-brand">
    <h2>Movie App</h2>
  </div>
            <div className="nav-links">
    <a id="home" href="/">Home</a>
    <a id="fav" href="/favorites">Favorites</a>
  </div>
        </nav>
    );
}
export default NavBar;