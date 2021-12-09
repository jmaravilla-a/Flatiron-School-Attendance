import Students from "./Students";
import { useEffect, useState } from "react";
import styled from "styled-components"


function StudentsContainer(students) {

    return (
        <Layout>
        <div className="student_container">
            <h2>Student List</h2>
            {students.map((student) => (
              <Students key={student.id} student={student} />
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
    margin: 1rem 1rem 1rem 1rem;
    background: rgba(255, 255, 255, 0.8);
    overflow: scroll;
`;