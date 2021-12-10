import {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function EditNameForm ({handleToggle, updateStudentName, student:{id, first_name, last_name}}) {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: ''
    });

    const navigate = useNavigate();

    function validateForm() {
        return( 
        formData.first_name.length > 0 &&
        formData.last_name.length > 0
        );
    }

    function handleSubmit(event) {
        const {first_name, last_name} = formData
        event.preventDefault();
        fetch(`/students/${id}`, {
        method: "PATCH", 
        headers: {
            'Content-Type':'application/json', 
        }, 
        body: JSON.stringify({
            first_name,
            last_name,
            id
        })
        })
        .then((r) => {
        if (r.ok) {
            r.json()
            .then(student => {
                updateStudentName(student)
                navigate('/homepage');
            })
        } else
            r.json()
            .then((err) => {
                console.error(err)
            })
        })
        reset() 
    }
    const reset = () => {
        setFormData({
            first_name: '',
            last_name: '',
        })
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }


    return (
        <div className="studentForm">
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="firstName">
            <Form.Label>Current: {first_name}</Form.Label>
            <Form.Control
                autoFocus
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder='New'
                />
            </Form.Group>
            <Form.Group size="lg" controlId="lastName">
            <Form.Label>Current: {last_name}</Form.Label>
            <Form.Control
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder='New'
            />
            </Form.Group>
            <Button onClick={handleToggle} blocksize="lg" type="submit" disabled={!validateForm()}>
            Finished!
            </Button>
        </Form>
        </div>
    )
}

export default EditNameForm