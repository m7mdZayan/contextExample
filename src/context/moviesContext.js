import React, { createContext } from "react";

export const moviesContext = createContext();

const movies = {
  state: [
    { id: 0, name: "green street hooligans", price: 55 },
    { id: 1, name: "i am back", price: 40 },
    { id: 2, name: "the dark side", price: 60 },
  ],
};

export const MoviesContextProvider = (props) => (
  <moviesContext.Provider value={movies}>
    {props.children}
  </moviesContext.Provider>
);
