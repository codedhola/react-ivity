import React, { useState, useEffect } from "react";
import { tempWatchedData } from "./assets/data";
import Box from "./Box";
import MovieList from "./MovieList";
import WatchLists from "./WatchLists";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import SelectedMovieTemp from "./SelectedMovie";

const api__key = "70d8d442";
const MainPage = ({ movies, setMovies, query, setQuery }) => {
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");

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
      async function fetchMovies() {
        if (query.length <= 3) {
          setMovies([]);
          SetError("");
          return;
        }
        try {
          SetError("");
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${api__key}&s=${query}`
          );
          if (!res.ok) {
            throw new Error(
              "An Error Occured while fetching your data, please try again..."
            );
          }
          const data = await res.json();

          if (!data.Search) throw new Error("Couldn't Search your result");

          setMovies(data.Search);
          setIsLoading(false);
        } catch (e) {
          SetError(e.message);
          setIsLoading(false);
        }
      }
      fetchMovies();
    },
    [query]
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
