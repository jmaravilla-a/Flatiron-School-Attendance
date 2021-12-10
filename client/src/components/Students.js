import '../App.css'
import {useState, useEffect} from "react";

function Students ({student}) {
    const [presentOrAbsent, setPresentOrAbsent] = useState(false)

    const handleClick = () => {
        setPresentOrAbsent(presentOrAbsent => !presentOrAbsent)

    }
    return (
        <div className="student-card">
            <p>{student.last_name}, {student.first_name}</p>
            <div className="button-container">
                {presentOrAbsent ? 
                <button onClick={handleClick}> Present </button> :
                <button onClick={handleClick}> Absent </button>
                }
                <button> Edit Name </button>
                <button> Remove </button>
            </div>
        </div>

    );
}

export default Students