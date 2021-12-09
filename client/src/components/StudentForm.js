import {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function StudentForm() {
    const [formData, setFormData] = useState({
        first_name: '', 
        last_name: '', 
        teacher_id: ''
    });

    const navigate = useNavigate();
    
    function validateForm() {
        return( 
        formData.first_name.length > 0 &&
        formData.last_name.length > 0 &&
        formData.teacher_id.length > 0
        );
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/students", {
        method: "POST", 
        headers: {
            'Content-Type':'application/json', 
        }, 
        body: JSON.stringify({
            username: userName, 
            password
        })
        })
        .then((r) => {
        if (r.ok) {
            r.json()
            navigate('/homepage');
        } else
        r.json()
        .then((err) => {
            console.error(err)
        })
        })
        
    }

    return (
        <div className="studentForm">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="firstName">
            <Form.Label>firstName</Form.Label>
            <Form.Control
                autoFocus
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={(e) => setFormData(e.target.value)}
            />
            </Form.Group>
            <Form.Group size="lg" controlId="lastName">
            <Form.Label>lastName</Form.Label>
            <Form.Control
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={(e) => setFormData(e.target.value)}
            />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
            <Form.Label>Student Form</Form.Label>
            <Form.Control
                type="number"
                name="teacher_id"
                value={formData.teacher_id}
                onChange={(e) => setFormData(e.target.value)}
            />
            </Form.Group>
            <Button blocksize="lg" type="submit" disabled={!validateForm()}>
            Student
            </Button>
        </Form>
        </div>
    );
}


export default StudentForm;