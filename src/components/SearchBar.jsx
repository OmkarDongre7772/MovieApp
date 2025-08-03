import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-container">
      <input
        className="bar"
        type="text"
        value={query}
        placeholder="Search Movies..."
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        className="search-btn"
        onClick={handleSearch}
      >
        🔍︎
      </button>
    </div>
  );
}

export default SearchBar;
