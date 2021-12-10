import Students from "./Students";
import styled from "styled-components"
import {useState} from "react";

function StudentsContainer({students, updateStudentName, handleRemove}) {
    const [date, setDate] = useState({date: ''})
    const handleDateChange = (e) => {
        setDate({[e.target.name]:e.target.value})
    }
    console.log(date)



    return (
        <Layout>
        <h1>Student Attendance</h1>
        <label for="date">Date:</label>
<input onChange={handleDateChange} type="date" id="date" name="date"></input>
        <p>Number of students: {students.length}</p>
        <div className="student_container">
            {students.map((student) => (
              <Students key={student.id} student={student} handleRemove={handleRemove} updateStudentName={updateStudentName}/>
            ))}
        </div>
        </Layout>
    );
}
    
    export default StudentsContainer;


    const Layout = styled.div`
    height: 80vh;
    width: 75%;
    border: 2px solid white;
    border-radius: 3px;
    box-shadow: 0 0 3px gray;
    float:right;
    text-align: center;
    margin: 1rem 8rem 1rem 1rem;
    background: rgba(255, 255, 255, 0.8);
    overflow: scroll;
`;

//     const Header = styled.h2`
//     height: 5vh;
//     width: 30%;
//     border: 2px solid white;
//     /* border-radius: 3px; */
//     box-shadow: 0 0 3px gray;
//     float:right;
//     text-align: center;
//     margin: -4rem 40rem 1rem 1rem;
//     background: rgba(255, 255, 255, 0.8);
//     overflow: scroll;
// `;