import { useState } from "react";
import { tempMovieData } from "./assets/data";
import NavBar from "./NavBar";
import MainPage from "./MainPage";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <NavBar movies={movies} />
      <MainPage movies={movies} />
    </>
  );
}
