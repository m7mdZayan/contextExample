import React from "react";

const Movie = (props) => (
  <div className="movie">
    <p>{props.name}</p>
    <p>{props.price}</p>
  </div>
);

export default Movie;
