import React, { useEffect, useRef } from "react";
import { useState } from "react";

const NavBar = ({ movies, query, setQuery }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar query={query} setQuery={setQuery} />
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

function SearchBar({ query, setQuery }) {
  const inputEl = useRef(null);

  useEffect(function () {
    function callback(e) {
      if (document.activeElement === inputEl.current) return;

      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callback);

    return () => document.addEventListener("keydown", callback);
  }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
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
