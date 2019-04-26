import React from "react";
import  "./style.css";

function Nav(props) {
    return (
        <nav className="navbar-nav navbar-expand-lg navbar-light "  >
        <div className="navbar-brand float-right"> Score: {props.score}  </div>
        <div className="navbar-brand float-right"> High Score: {props.topScore} </div>
        </nav>
    );
}

export default Nav;