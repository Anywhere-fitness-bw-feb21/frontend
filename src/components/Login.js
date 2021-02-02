import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const initialValues = {
  // text inputs
  username: "",
  password: "",
};



export default function Login() {
  //const [loginInfo, setloginIn] = useState(initialMember);
  const [infoValues, setInfoValues] = useState(initialValues);

  // changeHandler
  const inputChange = (evt) => {
    evt.persist();
    setInfoValues({
      ...infoValues,
      [evt.target.name]: evt.target.value,
    });
  };

  const submitLogin = (e) => {
      e.preventDefault()
      axios
      .post("https://anytime-fitness.herokuapp.com/api/auth/login",infoValues)
      .then(res=> {
          window.localStorage.setItem('token',res.data.token)
      })
      .catch(err => {
          console.log(err.response)
      })
  }

  return (
    <StyledForm>
    <form onSubmit={submitLogin}>
      <label>
        Username
        <input
          type = "text"
          name="username"
          value={infoValues.username}
          onChange={inputChange}
        />
      </label>

      <label>
        Password
        <input
          type = "password"
          name="password"
          value={infoValues.password}
          onChange={inputChange}
        />
      </label>

      <button className='loginBtn'>Login</button>
      <br/>
      <p>If you don't have account</p>
      <Link className='signUp' to = "/register">Please Sign Up</Link>
    </form>
    </StyledForm>
  );
}


const StyledForm = styled.form`

background-color: #BAC7BE;
height: 30vh;
display: flex;
justify-content: center;
align-items: center;
margin: 5rem 10rem;



label{
margin-left: 1rem;


}

input{
  background-color: #C2E1C2;
  margin-left: 1rem;
  border: none;
}
p{
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 1rem;
  text-decoration: none;
}
.signUp{
  display: flex;
  justify-content:center;
  align-items: center;
  margin-top: 1rem;
  padding: 0;
  text-decoration: none;
  text-decoration: underline;
  color: #778472;
}
.loginBtn{
  margin-left: 1rem;
}
`