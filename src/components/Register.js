import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import schema from '../validation/schema'
import * as yup from 'yup'

const initialValues = {
  // text inputs
  name: "",
  username: "",
  email: "",
  password: "",

  // checkbox for position
  role:""
};

const initialValueErrors = {
  name: "",
  username: "",
  email: "",
  password: "",
  role: ""
};

// const initialMembers = [];
const initialDisabled = true;

export default function Register() {
 // const [members, setMembers] = useState(initialMembers);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValueErrors);
  const [disabled, setDisabled] = useState(initialDisabled);



  const validate = (evt) => {
    yup
      .reach(schema, evt.target.name)
      .validate(evt.target.value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [evt.target.name]: "",
        });
      })
      .catch((err) => {  
        setFormErrors({
          ...formErrors,
          [evt.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (e) => {
    e.persist();
    validate(e);

    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

  };

  //console.log(formValues)
  const postMember = (newMemeber) => {
      console.log(newMemeber);
    axios
      .post(
        "https://anytime-fitness.herokuapp.com/api/auth/register",
        newMemeber
      )
      .then((res) => {
          //window.localStorage.setItem("token",)
          console.log(res)
        // setMembers([...members, res.data]);
       
      })
      .catch((err) => console.log(err));
  };

  const onSubmit = (e) => {
      e.preventDefault()
    const newMemeber = {
      name: formValues.name.trim(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role
    };
    postMember(newMemeber);
    setFormValues(initialValues)
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <form onSubmit={onSubmit}>
    
      <label>
        Name
        <input 
        type = "text"
        name="name"
        value={formValues.name} 
        onChange={inputChange} />
      </label>

      <p> {formErrors.username}</p>

      <label>
        Username
        <input
          type = "text"
          name = "username"
          value = {formValues.username}
          onChange = {inputChange}
        />
      </label>

      <p> {formErrors.email}</p>

      <label>
        Email
        <input 
        type = "email"
        name="email" 
        value={formValues.email} 
        onChange={inputChange} />
      </label>

      <p> {formErrors.password}</p>

      <label>
        Password
        <input
          type = "password"
          name="password"
          value={formValues.password}
          onChange={inputChange}
        />
      </label>

      <p> {formErrors.role}</p>

      <label>
        Client
        <input 
        type="radio" 
        name = "role"
        value = "client"
        onChange={inputChange} />
      </label>
      <label>
        Instructor
        <input 
        type="radio" 
        name = "role"
        value="instructor" 
        onChange={inputChange} />
      </label>
      <button onSubmit={onSubmit} disabled = {disabled}>Submit</button>
    </form>
  );
}
