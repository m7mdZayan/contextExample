import React from "react";
import Nav from "./components/nav";
import MoviesList from "./components/moviesList";
import { MoviesContextProvider } from "./context/moviesContext";

import "./App.css";
const App = () => {
  return (
    <React.Fragment>
      <MoviesContextProvider>
        <Nav />
        <MoviesList />
      </MoviesContextProvider>
    </React.Fragment>
  );
};

export default App;
