import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


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
          console.log(res)
      })
      .catch(err => {
          console.log(err.response)
      })
  }

  return (
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

      <button>Login</button>
      <br/>
      <Link to = "/register">If you don't have account, please Sign in</Link>
    </form>
  );
}
