import React from "react";

const Movie = ({ name, price }) => (
  <div className="movie">
    <p>{name}</p>
    <p>{price} $</p>
  </div>
);

export default Movie;
