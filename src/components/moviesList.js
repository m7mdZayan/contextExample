import React from "react";
import Movie from "./movie";

function MoviesList(props) {
  const movies = [
    { name: "green street hooligans", price: 55 },
    { name: "i am back", price: 40 },
    { name: "the dark side", price: 60 },
  ];

  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} />
      ))}
    </div>
  );
}

export default MoviesList;
