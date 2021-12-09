import '../App.css'


function Students ({student}) {

    return (
        <div className="student-card">
            <p>{student.last_name}, {student.first_name}</p>
            <div className="button-container">
                <button> P </button>
                <button> A </button>
                <button> ✍️ Edit </button>
            </div>
        </div>

    );
}

export default Students