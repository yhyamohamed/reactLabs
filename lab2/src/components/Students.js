import React from "react";
import { Link } from "react-router-dom";

function Students(props) {
  const students = props.students;
  return (
    <table className="table table-striped table-hover">
      <caption style={{ captionSide: "top" }}>List of Students : </caption>
      <thead>
        <tr className="table-primary">
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <th scope="row">{student.id}</th>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>
              <Link
                to={`/students/${student.id}`}
                className="btn btn-sm btn-primary"
              >
                Details
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Students;
