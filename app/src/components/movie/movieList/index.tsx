import React, { useEffect, useState } from "react";
import MovieItem from "../movieItem";
import { IMovieList } from "../../../types/movie/IMovieList";

const MovieList = () => {
  const [movies, setMovies] = useState<IMovieList[]>([]);
  const fetchData = async (): Promise<void> => {
    const response = await fetch(
      "https://www.omdbapi.com/?s=ezel&apikey=3c555311"
    );
    const json = await response.json();
    setMovies(json.Search);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section>
        {movies.map((e, i) => (
          <div key={e.Title + i}>
            <MovieItem title={e.Title} src={e.Poster} />
          </div>
        ))}
      </section>
    </>
  );
};

export default MovieList;
