import React, { useState, useEffect } from "react";
import { tempWatchedData } from "./assets/data";
import Box from "./Box";
import MovieList from "./MovieList";
import WatchLists from "./WatchLists";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";

const api__key = "70d8d442";
const MainPage = ({ movies, setMovies }) => {
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState("");

  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${api__key}&s=thor`
        );
        const data = await res.json();
        if (!res.ok)
          throw new Error(
            "An Error Occured while fetching your data, please try again..."
          );
        setMovies(data.Search);
        setIsLoading(false);
      } catch (e) {
        SetError(e.message);
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <main className="main">
      <Box>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <ErrorMsg message={"An Error Occured fetching your data"} />
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
