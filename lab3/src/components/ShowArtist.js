import React from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../custumHooks/usefetch";

function ShowArtist() {
  const { id } = useParams();
  const {
    data: artist,
    isPending,
    error,
  } = useFetch(`http://localhost:5000/artists/${id}`);
  return (
    <div className="row">
      {isPending && (
        <>
          <div className="alert alert-primary" role="alert">
            <span
              className="spinner-border text-info spinner-border-m me-2"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </span>
            Getting Data pleas wait!
          </div>
        </>
      )}
      {error && (
        <>
          <div className="alert alert-danger" role="alert">
            we'r sry , {error} ..pls try again later!
          </div>
        </>
      )}
      {artist && (
        <>
          <div className="card mb-3 col-8 offset-2 ">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`/images/covers/${artist.cover}.jpg`}
                  className="img-fluid rounded-start"
                  alt="artist pic"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{artist.name}</h5>
                  <p className="card-text">{artist.bio}</p>
                  <p className="card-text">
                    <span className="badge rounded-pill bg-info text-dark ">
                      {artist.genre}
                    </span>
                    <br />
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                  <Link
                    to={`/artists`}
                    className="btn btn-warning"
                  >
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8 offset-2 row row-cols-1 row-cols-md-2 g-4">
            {artist.albums.map((album) => (
              <div className="col" key={album.albumId}>
                <div className="card border-primary ">
                  <img
                    src={`/images/albums/${album.cover}.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body text-primary">
                    <h5 className="card-title">{album.title}</h5>
                    <p className="card-text">
                      <small className="text-muted">{album.year} -</small>
                      <span className="badge rounded-pill bg-info text-dark ms-1">
                        ${album.price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ShowArtist;
