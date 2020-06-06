import React from "react";
import Movie from "./movie";
import { moviesContext } from "../context/moviesContext";

function MoviesList(props) {
  return (
    <div>
      <moviesContext.Consumer>
        {(context) => (
          <div>
            {context.state.map((movie) => (
              <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
          </div>
        )}
      </moviesContext.Consumer>
    </div>
  );
}

export default MoviesList;
