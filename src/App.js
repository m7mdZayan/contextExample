import React from "react";
import Nav from "./components/nav";
import MoviesList from "./components/moviesList";

import "./App.css";
const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <MoviesList />
    </React.Fragment>
  );
};

export default App;
