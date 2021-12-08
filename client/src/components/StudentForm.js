// import { useEffect, useState } from "react";

// function StudentForm({ studentId, onAddStudent }) {
//   const [students, setStudents] = useState([]);
//   const [studentId, studentId] = useState("");

//   const [formErrors, setFormErrors] = useState([]);

//   useEffect(() => {
//     fetch("/Students")
//       .then((r) => r.json())
//       .then(setStudents);
//   }, []);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = {
//       first_name: studentId,
//       last_name: studentId,
//       teacher_id: parseInt(rating),
//     };
//     fetch("/appearances", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((appearance) => {
//           onAddStudent(appearance.student);
//           setFormErrors([]);
//         });
//       } else {
//         r.json().then((err) => setFormErrors(err.errors));
//       }
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="student_id">Student:</label>
//       <select
//         id="student_id"
//         name="student_id"
//         value={studentId}
//         onChange={(e) => setStudentId(e.target.value)}>
            
//         <option value="">Select a Student</option>
//         {guests.map((student) => (
//           <option key={student.id} value={student.id}>
//             {student.name}
//           </option>
//         ))}
//       </select>
//       {Errors.length > 0
//         ? formErrors.map((err) => (
//             <p key={err} style={{ color: "red" }}>
//               {error}
//             </p>
//           ))
//         : null}
//       <button type="submit">Add To Episode</button> 
//     </form>
//   );
// }

// export default StudentForm;
