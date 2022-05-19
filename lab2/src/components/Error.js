import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container mt-5 bg-light p-1">
      <div className=" col-8 offset-2 card bg-danger">
        <div className="card-header bg-info text-white">ERROR</div>
        <div className="card-body">
          <h5 className="card-title text-white">sth went wrong</h5>
          <p className="card-text text-white">
            there was an Error while loading page...
          </p>
          <Link className="btn btn-warning" to="/">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
