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

      {/* <main className="main">
        <Box setIsOpen={setIsOpen1} isOpen={isOpen1} movies={movies}>
          <ul className="list">
            {movies?.map((movie) => (
              <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Box>

        <Box setIsOpen={setIsOpen2} isOpen={isOpen2} movies={movies}>
          <div className="box">
            <button
              className="btn-toggle"
              onClick={() => setIsOpen2((open) => !open)}
            >
              {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && (
              <>
                <div className="summary">
                  <h2>Movies you watched</h2>
                  <div>
                    <p>
                      <span>#️⃣</span>
                      <span>{watched.length} movies</span>
                    </p>
                    <p>
                      <span>⭐️</span>
                      <span>{avgImdbRating}</span>
                    </p>
                    <p>
                      <span>🌟</span>
                      <span>{avgUserRating}</span>
                    </p>
                    <p>
                      <span>⏳</span>
                      <span>{avgRuntime} min</span>
                    </p>
                  </div>
                </div>

                <ul className="list">
                  {watched.map((movie) => (
                    <li key={movie.imdbID}>
                      <img src={movie.Poster} alt={`${movie.Title} poster`} />
                      <h3>{movie.Title}</h3>
                      <div>
                        <p>
                          <span>⭐️</span>
                          <span>{movie.imdbRating}</span>
                        </p>
                        <p>
                          <span>🌟</span>
                          <span>{movie.userRating}</span>
                        </p>
                        <p>
                          <span>⏳</span>
                          <span>{movie.runtime} min</span>
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </Box>
      </main> */}
    </>
  );
}

{
  /* <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍿</span>
          <h1>usePopcorn</h1>
        </div>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </nav> */
}
{
  /* <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen1((open) => !open)}
          >
            {isOpen1 ? "–" : "+"}
          </button>
          {isOpen1 && (
            <ul className="list">
              {movies?.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
                    <p>
                      <span>🗓</span>
                      <span>{movie.Year}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div> */
}

{
  /* <div className="box">
          <button
            className="btn-toggle"
            onClick={() => setIsOpen2((open) => !open)}
          >
            {isOpen2 ? "–" : "+"}
          </button>
          {isOpen2 && (
            <>
              <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                  <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                  </p>
                </div>
              </div>

              <ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    <h3>{movie.Title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div> */
}
