import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
// import "../css/Header.css"

function Header({ onSearch }) {
  return (
    <div className="bdy">
      <NavBar />
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Header;
