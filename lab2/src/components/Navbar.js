import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Lab-2
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active ">
              <Link className="nav-link" to="/students">
                ALL-Students <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/students/:id">
                Show
              </Link>
            </li>
           <li className="nav-item"> 
            <Link className="nav-link" to="/Error">
              Error
            </Link>
          </li> 
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
