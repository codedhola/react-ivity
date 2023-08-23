import React, { useState, useEffect } from "react";
import { tempWatchedData } from "./assets/data";
import Box from "./Box";
import MovieList from "./MovieList";
import WatchLists from "./WatchLists";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import SelectedMovieTemp from "./SelectedMovie";


const MainPage = ({ movies, setMovies, query, setQuery, isLoading, error }) => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [watched, setWatched] = useState(function () {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });

  // console.log(selectedMovie);

  function onAddWatched(add) {
    setWatched((added) => [...added, add]);
  }

  function handleCloseMovie() {
    setSelectedMovie(null);
  }

  function handleDeleteMovie(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbId !== id));
  }

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  

  return (
    <main className="main">
      <Box>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorMsg message={error} />
        ) : (
          <MovieList movies={movies} setSelectedMovie={setSelectedMovie} />
        )}
      </Box>

      <Box>
        {selectedMovie ? (
          <SelectedMovieTemp
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            setWatched={onAddWatched}
            onCloseMovie={handleCloseMovie}
            watched={watched}
          />
        ) : (
          <WatchLists
            watched={watched}
            movies={movies}
            onDeleteMovie={handleDeleteMovie}
          />
        )}
      </Box>
    </main>
  );
};

export default MainPage;
