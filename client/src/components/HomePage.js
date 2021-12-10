import React from 'react';
import StudentsContainer from './StudentsContainer';
import Navbar from './NavBar';
import StudentForm from './StudentForm';
import { useEffect, useState } from "react";


function HomePage() {
  const [students, setStudents] = useState([])

  const potato = (data) => data.json()

  useEffect(() => {
      fetch("/students")
      .then(potato)
      .then(setStudents)
  }, []);

  const handleAddStudent = (student) => {
    const newStudents = [...students, student]
    setStudents(newStudents)
  }
  return (
    <div>
      <Navbar />
      <StudentForm handleAddStudent={handleAddStudent}/>
      <StudentsContainer students={students} />
    </div>
  );
  }
  
  export default HomePage;
  