import React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const Show = ({ parentStdList }) => {
  const { id } = useParams();
  let history = useHistory();
  let stdToShow = null;

  if (parentStdList) {
    stdToShow = parentStdList.filter((std) => std.id === +id)[0];
  }

  return (
    <div className="container mt-5 bg-light p-1">
      {stdToShow ? (
        <div className=" col-8 offset-2 card bg-success">
          <div className="card-header bg-primary text-white">
            Student No. {stdToShow.id}
          </div>
          <div className="card-body">
            <h5 className="card-title text-white">Name : {stdToShow.name}</h5>
            <p className="card-text text-white">Age : {stdToShow.age}</p>
            <button
              className="btn btn-warning"
              onClick={() => history.goBack()}
            >
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className=" col-8 offset-2 card bg-danger">
          <div className="card-header bg-info text-white">ERROR</div>
          <div className="card-body">
            <h5 className="card-title text-white">sth went wrong</h5>
            <p className="card-text text-white">no student Selected to show ...</p>
            <button
              className="btn btn-warning"
              onClick={() => history.goBack()}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Show;
