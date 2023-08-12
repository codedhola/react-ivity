import { useEffect, useState } from "react";
import { tempMovieData } from "./assets/data";
import NavBar from "./NavBar";
import MainPage from "./MainPage";

export default function App() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <NavBar movies={movies} />
      <MainPage movies={movies} setMovies={setMovies} />
    </>
  );
}
