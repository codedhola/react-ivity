import React, { useState } from "react";
import { tempWatchedData } from "./assets/data";
import Box from "./Box";
import MovieList from "./MovieList";
import WatchLists from "./WatchLists";

const MainPage = ({ movies }) => {
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <main className="main">
      <Box>
        <MovieList movies={movies} />
      </Box>

      <Box>
        <WatchLists watched={watched} />
      </Box>
    </main>
  );
};

export default MainPage;
