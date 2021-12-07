import { useEffect, useState } from "react";

function StudentForm({ studentId, onAddStudent }) {
  const [students, setStudents] = useState([]);
  const [studentId, studentId] = useState("");
  const [rating, setRating] = useState("");
  const [formErrors, setFormErrors] = useState([]);

  useEffect(() => {
    fetch("/Students")
      .then((r) => r.json())
      .then(setStudents);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      student_id: studentId,
      student_id: studentId,
      rating: parseInt(rating),
    };
    fetch("/appearances", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((appearance) => {
          onAddStudent(appearance.student);
          setFormErrors([]);
        });
      } else {
        r.json().then((err) => setFormErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="student_id">Student:</label>
      <select
        id="student_id"
        name="student_id"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}>
            
        <option value="">Select a Student</option>
        {guests.map((student) => (
          <option key={student.id} value={student.id}>
            {student.name}
          </option>
        ))}
      </select>
      {/* <label htmlFor="rating">Rating:</label>
      <input
        id="rating"
        name="rating"
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      {formErrors.length > 0
        ? formErrors.map((err) => (
            <p key={err} style={{ color: "red" }}>
              {err}
            </p>
          ))
        : null}
      <button type="submit">Add To Episode</button> */}
    </form>
  );
}

export default StudentForm;
