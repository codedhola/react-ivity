import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";

const api__key = "70d8d442";
const SelectedMovieTemp = ({
  selectedMovie,
  setSelectedMovie,
  setWatched,
  onCloseMovie,
  watched,
}) => {
  const [movie, setMovie] = useState({});
  const [starRater, setStarRater] = useState(null);

  const isWatched = watched.filter((el) => el.imdbId === selectedMovie);
  function handleAdd() {
    const addWatch = {
      imdbId: selectedMovie,
      imdbRating: Number(movie.imdbRating),
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      runtime: Number(movie.Runtime.split(" ").at(0)),
      userRating: starRater,
    };
    setWatched(addWatch);
    onCloseMovie();
  }

  useEffect(
    function () {
      async function getMovie() {
        try {
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${api__key}&i=${selectedMovie}`
          );
          if (!res.ok) {
            throw new Error(
              "An Error Occured while fetching your data, please try again..."
            );
          }
          const data = await res.json();
          setMovie(data);
        } catch (e) {
          // SetError(e.message);
          // setIsLoading(false);
          console.log(e);
        }
      }
      getMovie();
    },
    [selectedMovie]
  );

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={() => onCloseMovie()}>
          &larr;
        </button>
        <img src={movie.Poster} alt={`poster for ${movie.Poster}`} />
        <div className="details-overview">
          <h2>{movie.Title}</h2>
          <p>
            {movie.Released} &bull; {movie.Runtime}
          </p>
          <p>{movie.Genre}</p>
          <p>
            <span>⭐️</span>
            {movie.ImdbRating} IMDb rating
          </p>
        </div>
      </header>
      <section>
        {isWatched.length > 0 ? (
          <p>You Have rated this movie</p>
        ) : (
          <div className="rating">
            <StarRating maxRating={10} size={24} onSetRating={setStarRater} />
            {starRater && (
              <button className="btn-add" onClick={handleAdd}>
                + Add to list
              </button>
            )}
          </div>
        )}
        {/* <div className="rating">
          {!isWatched ? (
            <>
              <StarRating
                maxRating={10}
                size={24}
                onSetRating={setUserRating}
              />
              {userRating > 0 && (
                <button className="btn-add" onClick={handleAdd}>
                  + Add to list
                </button>
              )}
            </>
          ) : (
            <p>
              You rated with movie {watchedUserRating} <span>⭐️</span>
            </p>
          )}
        </div> */}
        <p>
          <em>{movie.Plot}</em>
        </p>
        <p>Starring {movie.Actors}</p>
        <p>Directed by {movie.Director}</p>
      </section>
      SelectedMovie - {selectedMovie}{" "}
    </div>
  );
};

export default SelectedMovieTemp;