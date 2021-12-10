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
                {toggle ? '' : <EditNameForm handleToggle={handleToggle} student={student} updateStudentName={updateStudentName}/>}
            <p>{student.last_name}, {student.first_name}</p>
            <div className="button-container">
                {presentOrAbsent ? 
                <button className="button-container" onClick={handleClick}> Present </button> :
                <button className="button-container" onClick={handleClick}> Absent </button>
                }
                <button className="button-container" onClick={handleToggle}>{toggle ? 'Edit' : 'Close'}</button>
                <button className="button-container" onClick={() => handleRemove(student.id)}> Remove </button>
            </div>
        </div>

    );
}

export default Students