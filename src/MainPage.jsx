import React, { useState, useEffect } from "react";
import { tempWatchedData } from "./assets/data";
import Box from "./Box";
import MovieList from "./MovieList";
import WatchLists from "./WatchLists";

const api__key = "70d8d442";
const MainPage = ({ movies, setMovies }) => {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${api__key}&s=thor`
      );
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <main className="main">
      <Box>
        {isLoading ? (
          <p className="loader"> Loading </p>
        ) : (
          <MovieList movies={movies} />
        )}
      </Box>

      <Box>
        <WatchLists watched={watched} />
      </Box>
    </main>
  );
};

export default MainPage;
