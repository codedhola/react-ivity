import { useEffect, useState } from "react";
import { tempMovieData } from "./assets/data";
import NavBar from "./NavBar";
import MainPage from "./MainPage";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <>
      <NavBar movies={movies} setQuery={setQuery} query={query} />
      <MainPage movies={movies} setMovies={setMovies} query={query} />
    </>
  );
}
