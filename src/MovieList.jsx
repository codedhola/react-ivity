import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies, setSelectedMovie }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie
          key={movie.imdbID}
          movie={movie}
          setSelectedMovie={setSelectedMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;
