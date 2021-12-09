import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useState } from "react";
import '../App.css';
import styled from "styled-components";

function Login() {
  const [signup, setSignup] = useState(false)

  const selectForm = () => {
    setSignup(signup => !signup)
  }
    return (
      <div>
      <Layout >
        {signup ? <SignupForm /> : <LoginForm />}
        {signup ? 
        <div onClick = {selectForm} className='signup-button'>Already have an account?</div> : 
        <div onClick = {selectForm} className='signup-button'> Don't have an account?</div>
        }
      </Layout>
      </div>
    );
  }
  
  export default Login;

  const Layout = styled.div`
    margin-left: auto;
    margin-right: auto;
    position: relative;
    max-width: 440px;
    width: calc(100% - 40px);
    padding: 44px;
    margin-bottom: 28px;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
    -moz-box-shadow: 0 2px 6px rgba(0,0,0,.2);
    box-shadow: 0 2px 6px rgb(0 0 0 / 50%);
    min-width: 320px;
    min-height: 338px;
    overflow: hidden;

`;
  
