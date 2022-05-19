import React, { useState } from "react";

function AddStudent({ addStudent }) {
  const [stdToAdd, SetStdToAdd] = useState({ id:0 ,age: "", name: "" });
  const updateObject = (e) => {
    const { name, value } = e.target;
    SetStdToAdd((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className=" col-8 offset-2 bg-info mt-4 p-2">
      <p className="font-italic text-white mb-1 font-weight-bolder">
        Adding New Student :
      </p>
      <div className="col-9 offset-2  input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            ID
          </span>
        </div>
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          name="id"
          aria-describedby="inputGroup-sizing-sm"
          onChange={updateObject}
        />
      </div>
      <div className="col-9 offset-2 input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Name:
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          name="name"
          onChange={updateObject}
        />
      </div>
      <div className="col-9 offset-2  input-group input-group-sm mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Age
          </span>
        </div>
        <input
          type="number"
          className="form-control"
          aria-label="Sizing example input"
          name="age"
          aria-describedby="inputGroup-sizing-sm"
          onChange={updateObject}
        />
      </div>
      <button
        className="w-75 offset-2 btn btn-sm btn-warning"
        onClick={() => addStudent(stdToAdd)}
      >
        Add
      </button>
    </div>
  );
}

export default AddStudent;
