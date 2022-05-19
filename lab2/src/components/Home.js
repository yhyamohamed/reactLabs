import React, { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import Students from "./Students";

const Home = ({ SetParentStdList }) => {
  const [students, SetStudents] = useState([
    { id: 1, name: "yaya", age: "30" },
    { id: 2, name: "mohamed", age: "25" },
    { id: 3, name: "jhon wick", age: "30" },
    { id: 4, name: "baba yaga", age: "29" },
    { id: 5, name: "jhon doe", age: "30" },
  ]);
   useEffect(() => {SetParentStdList(students)})
  
  const addStudent = (stdToAdd) => {
    SetStudents([...students, stdToAdd])
    SetParentStdList(students);
    
  };
  return (
    <div className="container mt-5 bg-light p-1">
      <Students students={students} />
      <AddStudent addStudent={addStudent} />
    </div>
  );
};

export default Home;
