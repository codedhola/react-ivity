import { useState, useEffect } from "react";

const api__key = "70d8d442";
export function useMovies(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, SetError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          SetError("");
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${api__key}&s=${query}`,
            { signal: controller.signal }
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
          if (e.name !== "AbortError") {
            SetError(e.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return [isLoading, movies, error, setMovies];
}
