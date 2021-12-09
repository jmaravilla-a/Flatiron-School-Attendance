import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [teacherInfo, setTeacherInfo] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: ''
  });
  
  

  const navigate = useNavigate();
  
  function validateForm() {
    return (
    teacherInfo.first_name.length > 0 && 
    teacherInfo.last_name.length > 0 &&
    teacherInfo.username.length > 0 &&
    teacherInfo.email.length > 0 &&
    teacherInfo.password.length > 7 
    )}

  function handleSubmit(event) {
    const {first_name, last_name, username, email, password} = teacherInfo
    event.preventDefault();
    fetch("/teachers", {
      method: "POST", 
      headers: {
        'Content-Type':'application/json', 
      }, 
      body: JSON.stringify({
        first_name,
        last_name, 
        username, 
        email, 
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

  const handleChange = (e) => {
    setTeacherInfo({...teacherInfo, [e.target.name]:e.target.value})
}

  return (
    <div className="signUp">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocus
            type = 'text'
            name = 'first_name'
            value = {teacherInfo.first_name}
            onChange = {handleChange}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='lastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type = 'text'
            name = 'last_name'
            value = {teacherInfo.last_name}
            onChange = {handleChange}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            name= 'username'
            value={teacherInfo.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='email'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='text'
            name='email'
            value={teacherInfo.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size='lg' controlId='secretpassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name='password'
            value={teacherInfo.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button className='signin-button' blocksize='lg' type='submit' disabled={!validateForm()}>
          Signup!
        </Button>
      </Form>
    </div>
  );
}
  
  export default SignupForm;
  