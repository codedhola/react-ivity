import React, { useState, useEffect } from "react";
import { tempWatchedData } from "./assets/data";
import Box from "./Box";
import MovieList from "./MovieList";
import WatchLists from "./WatchLists";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import SelectedMovieTemp from "./SelectedMovie";
import { useLocalStorage } from "./useLocalStorage";


const MainPage = ({ movies, setMovies, query, setQuery, isLoading, error }) => {
  const [selectedMovie, setSelectedMovie] = useState("");
  const [watched, setWatched] = useLocalStorage([], "watched")

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
