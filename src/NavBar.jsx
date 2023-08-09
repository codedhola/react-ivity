import React from "react";
import { useState } from "react";

const NavBar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <MovieLength movies={movies} />
    </nav>
  );
};

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function SearchBar() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function MovieLength({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default NavBar;
