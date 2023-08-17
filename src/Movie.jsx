import React from "react";

function handleViewMovie(movie, setMovie) {
  setMovie((selectedId) => (movie === selectedId ? null : movie));
}

const Movie = ({ movie, setSelectedMovie }) => {
  return (
    <li onClick={() => handleViewMovie(movie.imdbID, setSelectedMovie)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
