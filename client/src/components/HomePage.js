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

  const updateStudentName = (updatedStudent) => {
    const newSetOfStudents = students.filter(student => student.id !== updatedStudent.id)
    const completeStudents = [updatedStudent, ...newSetOfStudents]
    setStudents(completeStudents)
  }

  const handleRemove = (id) => {
    fetch(`/students/${id}`, {
      method: 'DELETE', 
    }).then((r) => {
      if (r.ok) {
        setStudents((students) => 
        students.filter((student) => student.id !== id)
        )
      }
    })
  }

  return (
    <div>
      <Navbar />
      <StudentForm handleAddStudent={handleAddStudent}/>
      <StudentsContainer students={students} updateStudentName={updateStudentName} handleRemove={handleRemove}/>
    </div>
  );
  }
  
  export default HomePage;
  