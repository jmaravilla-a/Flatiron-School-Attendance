import React from 'react';
import StudentsContainer from './StudentsContainer';
import Navbar from './NavBar';
import StudentForm from './StudentForm';


function HomePage() {
  const [students, setStudents] = useState([])
    const resp = (data) => data.json()
    useEffect(() => {
        fetch("/students")
        .then(resp)
        .then(setStudents)
    }, []);

    const handleAddStudent = () => {


    }
    return (
      <div>
        <Navbar />
        <StudentForm students={students} handleAddStudent={handleAddStudent}/>
        <StudentsContainer students={students} />
      </div>
    );
  }
  
  export default HomePage;
  