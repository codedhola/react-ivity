import { useEffect, useState } from "react";
import { tempMovieData } from "./assets/data";
import NavBar from "./NavBar";
import MainPage from "./MainPage";
import { useMovies } from "./useMovies";

export default function App() {
  
  const [query, setQuery] = useState("thor");
  const [isLoading, movies, error, setMovies ] = useMovies(query)

  return (
    <>
      <NavBar movies={movies} setQuery={setQuery} query={query} />
      <MainPage movies={movies} setMovies={setMovies} query={query} isLoading={isLoading} error={error} />
    </>
  );
}
