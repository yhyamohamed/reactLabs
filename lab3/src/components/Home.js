import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="/images/cover.png" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <Link className="fs-1 d-block text-white text-decoration-none" to="/artists">
              Music Lib List
            </Link>
            <Link
              className="fs-4 font-monospace text-white text-decoration-none"
              to="/artists"
            >
              Some representative placeholder content for the first slide.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
