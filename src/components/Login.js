import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const initialValues = {
  // text inputs

  username: "",
  password: "",
};

const initialMember = [];

export default function Login() {
  const [loginInfo, setloginIn] = useState(initialMember);
  const [infoValues, setInfoValues] = useState(initialValues);

  // changeHandler
  const inputChange = (evt) => {
    evt.persist();
    setInfoValues({
      ...infoValues,
      [evt.target.name]: evt.target.value,
    });
  };
  return (
    <div>
      <label>
        Username
        <input
          name="username"
          value={loginInfo.username}
          onChange={inputChange}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          value={loginInfo.password}
          onChange={inputChange}
        />
      </label>

      <button>Login</button>
      <Link to = "/register">If you don't have account, please Sign in</Link>
    </div>
  );
}
