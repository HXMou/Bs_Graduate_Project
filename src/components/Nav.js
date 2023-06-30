import React from "react";
import { Link } from "react-router-dom";
import '../css/home.css'

function Nav() {
  const styling = {
    color: "white",
  };

  return (
    <header>
                <div className="container">
                    <div className="header_nav">
                        <ul>
                            <Link to="/Home">
                                <li>HOME</li>
                            </Link>
                            <Link to="/VisIndex">
                                <li>VISUALIZATION</li>
                            </Link>
                            <Link to="/Code">
                                <li>CODE</li>
                            </Link>
                            {/* <Link to="/About">
                                <li>ABOUT</li>
                            </Link> */}
                        </ul>
                    </div>
                </div>
    </header>
  );
}

export default Nav;