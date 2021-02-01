import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
const initialValues = {
  // text inputs
  name: "",
  username: "",
  email: "",
  password: "",

  // checkbox for position
  role: false,
};

const initialValueErrors = {
  username: "",
  email: "",
  password: "",
};

const initialMembers = [];
const initialDisabled = true;

export default function Register() {
  const [members, setMembers] = useState(initialMembers);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValueErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const schema = yup.object().shape({
    username: yup.string().min(8, "Username must be 8 characters long"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Must include email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be 8 characters long"),
    role: yup.boolean().oneOf([true], "This is required"),
  });

  const validate = (evt) => {
    yup
      .reach(schema, evt.target.username)
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
          [evt.target.username]: err.formErrors,
        });
      });
  };
  const inputChange = (evt) => {
    evt.persist();
    validate(evt);
    setFormValues({
      ...formValues,
      [evt.target.name]: evt.target.value,
    });
  };
  const postMember = (newMemeber) => {
    axios
      .post(
        "https://anytime-fitness.herokuapp.com/api/auth/register",
        newMemeber
      )
      .then((res) => {
        setMembers([...members, res.data]);
        setFormValues(initialValues);
      })
      .catch((err) => console.log(err));
  };
  const onSubmit = () => {
    const newMemeber = {
      name: formValues.name.trim(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      position: ["position"].filter((term) => formValues[term]),
    };
    postMember(newMemeber);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" value={members.name} onChange={inputChange} />
      </label>
      <label>
        Username
        <input
          name="username"
          value={members.username}
          onChange={inputChange}
        />
      </label>
      <label>
        Email
        <input name="email" value={members.email} onChange={inputChange} />
      </label>
      <label>
        Password
        <input
          name="password"
          value={members.password}
          onChange={inputChange}
        />
      </label>
      <label>
        Client
        <input type="checkbox" value="Client" onChange={inputChange} />
      </label>
      <label>
        Instructor
        <input type="checkbox" value="Instructor" onChange={inputChange} />
      </label>
      <button onSubmit={onSubmit}>Submit</button>
    </form>
  );
}
