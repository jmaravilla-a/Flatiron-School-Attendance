import '../App.css'
import {useState} from "react";
import EditNameForm from './EditNameForm';

function Students ({student, updateStudentName, handleRemove}) {
    const [presentOrAbsent, setPresentOrAbsent] = useState(false)
    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setPresentOrAbsent(presentOrAbsent => !presentOrAbsent)
    }

    const handleToggle = () => {
        setToggle(toggle => !toggle)
    }
    return (
        <div className="student-card">
            <p>{student.last_name}, {student.first_name}</p>
            <div className="button-container">
                {presentOrAbsent ? 
                <button onClick={handleClick}> Present </button> :
                <button onClick={handleClick}> Absent </button>
                }
                <button onClick={handleToggle}>{toggle ? 'Edit' : 'Close'}</button>
                <button onClick={() => handleRemove(student.id)}> Remove </button>
                {toggle ? '' : <EditNameForm student={student} updateStudentName={updateStudentName}/>}
            </div>
        </div>

    );
}

export default Students