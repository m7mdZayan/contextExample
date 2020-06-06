import React, { useContext } from "react";
import { moviesContext } from "../context/moviesContext";

function Nav(props) {
  const myCon = useContext(moviesContext);

  return (
    <div className="nav">
      <p>Avialable Movies : {myCon.state.length}</p>
    </div>
  );
}
export default Nav;
