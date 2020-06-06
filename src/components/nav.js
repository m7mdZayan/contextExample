import React from "react";
import { moviesContext } from "../context/moviesContext";

function Nav(props) {
  return (
    <div className="nav">
      <moviesContext.Consumer>
        {(context) => <p>Avialable Movies : {context.state.length}</p>}
      </moviesContext.Consumer>
    </div>
  );
}
export default Nav;
